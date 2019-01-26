/**
 * Movie.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'movies',
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    genre: {
      type: 'string'
    },
    language: {
      type: 'string'
    },
    release_date: {
      type: 'ref',
      columnType: 'date'
    },
    production: {
      type: 'string'
    },
    poster: {
      type: 'string',
      required: true
    },
    popularity: {
      type: 'number',
      columnType: 'float'
    },
    summary: {
      type: 'string',
    }
  },
};

