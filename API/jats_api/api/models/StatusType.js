/**
 * StatusType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'sqlserver',
  meta: {
    schemaName: "jats_user",
  },
  tableName: 'StatusType',
  attributes: {
    StatusID: {
      type: 'int',
      primaryKey: true //if this is a primary key
    },
    Status: {
      type: 'string'
    },
    OwnerOrg: {
      type: 'string'
    },
    AdminID: {
      type: 'string'
    },
    Inactive: {
      type: 'boolean'
    },
    ParentActionType: {
      type: 'int'
    },
    ParentStatus: {
      type: 'boolean'
    },
    StatusOrdering: {
      type: 'int'
    }


  }
};
