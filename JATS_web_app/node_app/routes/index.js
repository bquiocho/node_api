var express = require('express');
var router = express.Router();
//var request = require('superagent');
var async = require('async');
var request = require('request');

var jats_users = [100];
var action_dets = [100];
/* GET home page. */
router.get('/jscid/:jscId', function(req, res, next) {
  console.log("jscId is set to " + req.params.jscId);

  async.waterfall([
          // get and use username
          function(callback) {
              var jscid_input = "mfriske";
              if (req.params.jscId == "") {
                  console.log("jscId is null");
              } else {
                  jscid_input = req.params.jscId;
                  jscid_input = jscid_input.toString();
              }
              callback(null, jscid_input);

          },
          // use username to get user info
          function(jscid_input, callback) {
              var user_options = {
                  method: 'POST',
                  url: 'http://localhost:1337/Users/list_info',
                  formData: {
                      JSCID: jscid_input
                  }
              };

              request(user_options, function(error, response, body) {
                  if (error) throw new Error(error);

                  jats_users = JSON.parse(body);
                  callback(null, jats_users);

              });
          },
          // get actions assigned for them using their UID
          function(jats_users, callback) {
            var action_options = {
                method: 'POST',
                url: 'http://localhost:1337/MyActions/list_info',
                formData: {
                    UID: jats_users[0].UID
                }
            };

            request(action_options, function(error, response, body) {
                if (error) throw new Error(error);

                action_dets = JSON.parse(body);
                callback(null, jats_users, action_dets);

            });
          },
      ],
      function(err, result) {
          if (err) {
              console.log(err);
              res.send(500, "Server Error");
              return;
          }
          res.render('index', {
              title: 'JATS',
              users: jats_users,
              action_details: action_dets,
          });
      }
  );
});

module.exports = router;
