/**
 * Created by Greg on 3/15/2017.
 */

/** @type HttpError */
const HttpError = require('standard-http-error');

function mapError(err, res) {
  switch (err.code) {
    case HttpError.UNAUTHORIZED:
    case HttpError.UNPROCESSABLE_ENTITY: return res.unauthorized(err);
    case HttpError.BAD_REQUEST: return res.badRequest(err);
    case HttpError.NOT_FOUND: return res.notFound(err);
    default: return res.serverError(err);
  }
}

module.exports = {
  authenticate(req, res) {
    const credentials = req.body;

    if (req.session.authenticated === true) {
      return res.badRequest('A user has already been authenticated for this session');
    }

    if (!credentials.userName || !credentials.password) {
      return res.badRequest('Login request missing userName or password field');
    }

    return User.authenticate(credentials)
      .then((user) => {
        req.session.authenticated = true;
        req.session.user = user;
        res.ok(user);
      })
      .catch(err => mapError(err, res));
  },

  me(req, res) {
    if (req.session.authenticated) {
      res.ok(req.session.user);
    } else {
      res.unauthorized('You are not authenticated');
    }
  },

  logout(req, res) {
    req.session.authenticated = false;
    delete req.session.user;
    res.ok();
  },

  ping(req, res) {
    res.ok('pong');
  },
};
