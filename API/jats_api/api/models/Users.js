/**
 * Users.js
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
  tableName: 'Users',
  attributes: {
    UID: {
      type: 'int',
      primaryKey: true //if this is a primary key
    },
    JSCID: {
      type: 'string'
    },
    LName: {
      type: 'string'
    },
    FName: {
      type: 'string'
    },
    MI: {
      type: 'string'
    },
    Title: {
      type: 'string'
    },
    Org: {
      type: 'string'
    },
    Email: {
      type: 'string'
    },
    Indv: {
      type: 'boolean'
    },
    GID: {
      type: 'string'
    },
    Role: {
      type: 'string'
    },
    MyIndv: {
      type: 'string'
    },
    LoginBy: {
      type: 'int'
    },
    Inactive: {
      type: 'boolean'
    },
    OrgDetail: {
      type: 'string'
    },
    CMSAdmin: {
      type: 'boolean'
    },
    OrgAdmin: {
      type: 'boolean'
    },
    EmailNotices: {
      type: 'boolean'
    },
    InfoOnlyEmailNotice: {
      type: 'boolean'
    },
    LEGALAdmin: {
      type: 'boolean'
    },
    UUPIC: {
      type: 'string'
    },
    AUID: {
      type: 'string'
    },
    UpdatedStatusEmailNotice: {
      type: 'boolean'
    },
    ICLAdmin: {
      type: 'boolean'
    },
    superUser: {
      type: 'string'
    },
    changeUser: {
      type: 'string'
    },
    FN: {
      type: 'int'
    },
    centerID: {
      type: 'int',
      foreignKey: true
    },
    Employer: {
      type: 'string'
    }

  }

};
