/**
 * StatusTypeController
 *
 * @description :: Server-side logic for managing Statustypes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hi: function(req, res) {
		return res.send("Hi there!");
	},
	list_info: function(req, res) {

		//var req_user_StatusID = req.body.StatusID;
		//console.log("Got JSCID: " + req_user_JSCID);

		// using parentstatus = 0, to return all status, since each status has parentstatus=0
		StatusType.find({
			ParentStatus: 0
		}).exec(function(err, results) {
			if (err) {
				return res.serverError(err);
			}
			sails.log('Wow, there are %d statusID named.', results.length);

			return res.json(results);
		});

	}
};
