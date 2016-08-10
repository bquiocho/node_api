/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
   hi: function(req, res) {
     return res.send("Hi there!");
   },
   list_info: function(req, res) {

		 var req_user_JSCID = req.body.JSCID;
     //console.log("Got JSCID: " + req_user_JSCID);

     Users.find({
       JSCID: req_user_JSCID
     }).exec(function(err, results) {
       if (err) {
         return res.serverError(err);
       }
       sails.log('Wow, there are %d user(s) named '+req_user_JSCID+'.', results.length);
			 //sails.log('Wow, there are %d users named '+req_user_JSCID+'.  Check it out:', results.length, results);
			//  sails.log('results[0]: ' + results[0].UID);
			//  sails.log('results[0]: ' + results[0].Role);
			//  sails.log('results[0]: ' + results[0].Org);
			 //var temp = "";
       return res.json(results);
     });

   }
 };
