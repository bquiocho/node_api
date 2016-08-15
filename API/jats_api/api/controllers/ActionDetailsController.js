/**
 * ActionDetailsController
 *
 * @description :: Server-side logic for managing Actiondetails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
   list_info: function(req, res) {

		 var req_user_UID = req.body.UID;
     //console.log("Got JSCID: " + req_user_JSCID);

     ActionDetails.find({
       Originator: req_user_UID
     }).exec(function(err, results) {
       if (err) {
         return res.serverError(err);
       }
       sails.log('Wow, there are %d actions(s) with UID '+req_user_UID+'.', results.length);
			 //sails.log('Wow, there are %d users named '+req_user_JSCID+'.  Check it out:', results.length, results);
			//  sails.log('results[0]: ' + results[0].UID);
			//  sails.log('results[0]: ' + results[0].Role);
			//  sails.log('results[0]: ' + results[0].Org);
			 //var temp = "";
       return res.json(results);
     });

   }
 };
