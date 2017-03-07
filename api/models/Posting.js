/**
 * Created by Greg on 4/12/2016.
 */
module.exports = {
  attributes: {
    //probably auto-generated by Mongo
    // id: {
    //   type: 'integer',
    //   primaryKey: true,
    //   unique: true,
    //   column
    // },

    title: {
      type: 'string',
      size: '50',
      required: true,
    },

    description: {
      type: 'mediumtext',
      required: true,
    },

    seller_id: {
      type: 'string',
      required: true
    },

    // datePosted: {
    //   type: 'integer',
    //   defaultsTo: 0
    // },

    // tags: {
    //   type: 'array',
    //   defaultsTo: []
    // },

    // user: {
    //   model: 'User'
    // }

    // skills: {
    //   collection: 'Property'
    // }

    active: {
      type: 'boolean',
      defaultsTo: true
    }
  }
};
