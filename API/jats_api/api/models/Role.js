/**
 * Role.js
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
   tableName: 'Role',
   attributes: {
     ID: {
       type: 'int',
       primaryKey: true //if this is a primary key
     },
     RoleID: {
       type: 'string'
     },
     Role: {
       type: 'string'
     }

   }

 };
