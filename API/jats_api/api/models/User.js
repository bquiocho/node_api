/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  connection: 'sqlserver',
  tableName: 'Products',
  attributes: {
    ProductID: {
      type: 'int',
      primaryKey: true //if this is a primary key
    },
    ProductName: {
      type: 'string'
    },
    ProductDescription: {
      type: 'string'
    }
  }

};
