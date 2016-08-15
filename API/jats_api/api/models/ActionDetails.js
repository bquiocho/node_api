/**
 * ActionDetails.js
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
  tableName: 'ActionDetails',
  attributes: {
    ActionID: {
      type: 'int',
      primaryKey: true //if this is a primary key
    },
    Title: {
      type: 'string'
    },
    Originator: {
      type: 'string'
    },
    Creator: {
      type: 'int'
    },
    Priority: {
      type: 'int'
    },
    Type: {
      type: 'int'
    },
    Type2: {
      type: 'int'
    },
    DueDate: {
      type: 'string'
    },
    DueTime: {
      type: 'string'
    },
    Contact: {
      type: 'string'
    },
    Attachment: {
      type: 'string'
    },
    Details: {
      type: 'string'
    },
    Status: {
      type: 'int'
    },
    ParentActionID: {
      type: 'int'
    },
    InfoOnly: {
      type: 'string'
    },
    GroupList: {
      type: 'string'
    },
    AssignDate: {
      type: 'string'
    },
    AssignTime: {
      type: 'string'
    },
    ClosedDate: {
      type: 'string'
    },
    ClosedTime: {
      type: 'string'
    },
    UpdateDate: {
      type: 'string'
    },
    UpdateTime: {
      type: 'string'
    },
    Clone: {
      type: 'int'
    },
    Source: {
      type: 'string'
    },
    OrgID: {
      type: 'int'
    },
    OwningOrg: {
      type: 'string'
    }


  }

};
