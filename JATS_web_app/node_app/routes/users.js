var express = require('express');
var router = express.Router();
//var request = require('superagent');
var async = require('async');
var request = require('request');

// request('localhost:1337/User', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

var usr = [100];
var acts = [100];
var roles = [100];
var stats = [100];
var asgn = [100];
//respond with "hello" when a GET request is made to the page localhost:3000/users
// router.get('/', function(req, res, next) {
router.get('/jscid/:jscId', function(req, res, next) {

  console.log("jscId is set to " + req.params.jscId);

    async.waterfall([
      // get and use username
      function(callback){
        var jscid_input = "mfriske";
        if(req.params.jscId == ""){
          console.log("jscId is null");
        }
        else{
          jscid_input = req.params.jscId;
          jscid_input = jscid_input.toString();
        }
        callback(null, jscid_input);

      },
      // use username to get user info
      function(jscid_input, callback){
        var user_options = { method: 'POST',
          url: 'http://localhost:1337/Users/list_info',
          formData: { JSCID: jscid_input } };

          request(user_options, function (error, response, body) {
            if (error) throw new Error(error);

            usr = JSON.parse(body);
            callback(null, usr);

          });
      },
      // from user info, find their role
      function(temp, callback){
        var action_options = { method: 'POST',
          url: 'http://localhost:1337/Role/list_info',
          formData: { Role: temp[0].Role } };

          request(action_options, function (error, response, body) {
            if (error) throw new Error(error);

            roles = JSON.parse(body);
            callback(null, roles, temp);

          });
      },
      // from user info, find their actions
      function(role, temp, callback){
        var action_options = { method: 'POST',
          url: 'http://localhost:1337/ActionDetails/list_info',
          formData: { UID: temp[0].UID } };

          request(action_options, function (error, response, body) {
            if (error) throw new Error(error);

            acts = JSON.parse(body);
            callback(null, acts, roles);

          });
      },
      // from get status
      function(temp, roles, callback){
        var action_options = { method: 'GET',
          url: 'http://localhost:1337/StatusType/list_info'};

          request(action_options, function (error, response, body) {
            if (error) throw new Error(error);

            stats = JSON.parse(body);
            callback(null, acts, roles, stats);

          });
      },

    ],
    function (err, result){
      if(err) { console.log(err); res.send(500,"Server Error"); return; }
      res.render('users', {
          title: 'JATS',
          user: usr,
          actions: acts,
          user_roles : roles,
          status: stats,
      });
    }
  );


    //res.end();
});





module.exports = router;
