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

		var req_user_StatusID = req.body.StatusID;
		//console.log("Got JSCID: " + req_user_JSCID);

		StatusType.find({
			StatusID: req_user_StatusID
		}).exec(function(err, results) {
			if (err) {
				return res.serverError(err);
			}
			sails.log('Wow, there are %d statusID named '+req_user_StatusID+'.', results.length);

			return res.json(results);
		});

	}
};
