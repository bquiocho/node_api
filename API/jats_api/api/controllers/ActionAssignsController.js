/**
 * ActionAssignsController
 *
 * @description :: Server-side logic for managing Actionassigns
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
 	list_info: function(req, res) {

 		var req_user_UID = req.body.UID;
 		//console.log("Got JSCID: " + req_user_JSCID);

 		ActionAssigns.find({
 			Assignees: req_user_UID
 		}).exec(function(err, results) {
 			if (err) {
 				return res.serverError(err);
 			}
 			sails.log('Wow, there are %d assigned actions(s) to user: '+req_user_UID+'.', results.length);

 			return res.json(results);
 		});

 	}
 };
