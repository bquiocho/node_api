/**
 * MyActions.js
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
    tableName: 'ActionAssigns',
    attributes: {
      ActionAssignID: {
        type: 'int',
        primaryKey: true //if this is a primary key
      },
      ActionID: {
        model: 'GetActions'
      },
      // ActionID: {
      //   type: 'int'
      // },
      Assignees: {
        type: 'int'
      },
      GID: {
        type: 'int'
      },
      StatusID: {
        type: 'int'
      },
      AssignedDate: {
        type: 'string'
      },
      AssignedTime: {
        type: 'string'
      },
      Reassign: {
        type: 'int'
      },
      ReassignDate: {
        type: 'string'
      },
      AA_Attachment: {
        type: 'string'
      },
      AssignGroup: {
        type: 'int'
      },

    }

  };
