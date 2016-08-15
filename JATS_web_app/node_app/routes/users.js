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
//respond with "hello" when a GET request is made to the page localhost:3000/users
router.get('/', function(req, res, next) {

    // var options = { method: 'POST',
    //   url: 'http://localhost:1337/Users/list_info',
    //   // headers:
    //   //  { 'postman-token': '37ad6329-6be0-cf7d-0271-9e2b580e70f0',
    //   //    'cache-control': 'no-cache',
    //   //    'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
    //   formData: { JSCID: 'gdrieke' } };
    //
    // request(options, function (error, response, body) {
    //   if (error) throw new Error(error);
    //
    //   usr = JSON.parse(body);
    //   //
    //   // res.render('users', {
    //   //     title: 'JATS',
    //   //     user: usr
    //   // });
    //   //console.log(body);
    //   //response.send(body);
    //   res.render('users', {
    //       title: 'JATS',
    //       user: usr
    //   });
    // });

    async.waterfall([
      function(callback){
        var user_options = { method: 'POST',
          url: 'http://localhost:1337/Users/list_info',
          formData: { JSCID: 'vking' } };

          request(user_options, function (error, response, body) {
            if (error) throw new Error(error);

            usr = JSON.parse(body);
            callback(null, usr);

          });
      },
      function(temp, callback){
        var action_options = { method: 'POST',
          url: 'http://localhost:1337/ActionDetails/list_info',
          formData: { UID: temp[0].UID } };

          request(action_options, function (error, response, body) {
            if (error) throw new Error(error);

            acts = JSON.parse(body);
            callback(null, acts);

          });
        //callback(null, temp);
      }
    ],
    function (err, result){
      if(err) { console.log(err); res.send(500,"Server Error"); return; }
      res.render('users', {
          title: 'JATS',
          user: usr,
          actions: acts
      });
    }
  );


    //res.end();
});












// var usr = [100];
// //respond with "hello" when a GET request is made to the page localhost:3000/users
// router.get('/', function(req, res, next) {
//     //res.send('hello');
//     //request("http://localhost:1337/Users/", function(error, response, body) {
//         //console.log(body);
//         //res.send(body);
//     //     usr = JSON.parse(body);
//     //     // console.log("usr[0]: " + usr[0].first_name);
//     //     // console.log("fn" + "\t" + "ln" + "\t" + "org");
//     //     // usr.forEach(function(u) {
//     //     //     console.log(u.first_name + "\t" + u.last_name + "\t" + u.org);
//     //     // });
//     //
//     //     res.render('users', {
//     //         title: 'JATS',
//     //         user: usr
//     //     });
//     // });
//     var options = { method: 'POST',
//       url: 'http://localhost:1337/Users/list_info',
//       headers:
//        { 'postman-token': '37ad6329-6be0-cf7d-0271-9e2b580e70f0',
//          'cache-control': 'no-cache',
//          'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
//       formData: { JSCID: 'ghayes' } };
//
//     request(options, function (error, response, body) {
//       if (error) throw new Error(error);
//
//       usr = JSON.parse(body);
//       //
//       res.render('users', {
//           title: 'JATS',
//           user: usr
//       });
//       //console.log(body);
//       //response.send(body);
//
//     });
//
//     //res.end();
// });

// var request = require("request");
//
// var options = { method: 'POST',
//   url: 'http://localhost:1337/Users/list_info',
//   headers:
//    { 'postman-token': '37ad6329-6be0-cf7d-0271-9e2b580e70f0',
//      'cache-control': 'no-cache',
//      'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
//   formData: { JSCID: 'ghayes' } };
//
// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
//
//   // usr = JSON.parse(body);
//   //
//   // res.render('users', {
//   //     title: 'JATS',
//   //     user: usr
//   // });
//   //console.log(body);
//   //response.send(body);
//
// });





module.exports = router;
