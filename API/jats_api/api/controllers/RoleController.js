/**
 * RoleController
 *
 * @description :: Server-side logic for managing Roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hi: function(req, res) {
		return res.send("Hi there!");
	},
	list_info: function(req, res) {

		var req_user_role = req.body.Role;
		//console.log("Got JSCID: " + req_user_JSCID);

		Role.find({
			RoleID: req_user_role
		}).exec(function(err, results) {
			if (err) {
				return res.serverError(err);
			}
			sails.log('Wow, there are %d role named '+req_user_role+'.', results.length);
			//sails.log('Wow, there are %d users named '+req_user_JSCID+'.  Check it out:', results.length, results);
		 //  sails.log('results[0]: ' + results[0].UID);
		 //  sails.log('results[0]: ' + results[0].Role);
		 //  sails.log('results[0]: ' + results[0].Org);
			//var temp = "";
			return res.json(results);
		});

	}
};
