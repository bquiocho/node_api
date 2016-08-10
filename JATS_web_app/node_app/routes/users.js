var express = require('express');
var router = express.Router();
var request = require('superagent');

var request = require('request');

// request('localhost:1337/User', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })


var usr = [100];
//respond with "hello" when a GET request is made to the page localhost:3000/users
router.get('/', function(req, res, next) {
    //res.send('hello');
    request("http://localhost:1337/Users/", function(error, response, body) {
        //console.log(body);
        //res.send(body);
        usr = JSON.parse(body);
        // console.log("usr[0]: " + usr[0].first_name);
        // console.log("fn" + "\t" + "ln" + "\t" + "org");
        // usr.forEach(function(u) {
        //     console.log(u.first_name + "\t" + u.last_name + "\t" + u.org);
        // });
        
        res.render('users', {
            title: 'JATS',
            user: usr
        });
    });

    //res.end();
});

// var http = require('http');
// var https = require('https');
// var usr = [100];
// var async = require('async');
//
// var extServerOptions = {
//     host: 'localhost',
//     port: '1337',
//     path: '/User',
//     method: 'GET'
// }
//
// // respond with "hello" when a GET request is made to the page localhost:3000/users
// // router.get('/', function(req, res, next) {
// //   res.send('hello');
// //   // call function get
// //   get();
// // });
//
// function fetchUsers(callback) {
//     var req = http.request(extServerOptions, function(http_res) {
//         http_res.setEncoding('utf8');
//         http_res.on('data', function(data) {
//           console.log("res on data");
//             usr = JSON.parse(data);
//             console.log("fn" + "\t" + "ln" + "\t" + "org");
//             usr.forEach(function(u) {
//                 console.log(u.first_name + "\t" + u.last_name + "\t" + u.org);
//             });
//             //console.log("usr: " + usr[0].first_name);
//             callback(null, usr);
//         });
//
//         // res.send("usr[0] fn = " + usr[0].first_name);
//         // res.send("usr[0] ln = " + usr[0].last_name);
//         http_res.on('end', function(){
//           console.log("res on end");
//         });
//
//     }).end(); // http.request(options, function(response){}).end();
//     //console.log("usr: " + usr[0].first_name);
//
// };
//
// function printUsers(callback, user){
//   console.log("user[0] fn = " + user[0].first_name);
//   console.log("user[0] ln = " + user[0].last_name);
//
// }
//
// router.get('/', function(req, res, next) {
//     async.waterfall([
//             function(callback) {
//                 fetchUsers(callback);
//             }
//         ],
//         printUsers
//     );
//     res.send("After async waterfall");
// });
//
//
// function step1(callback) {
//     setTimeout(function() {
//         console.log('Done async step 1:');
//         callback( /*err=*/ null, /*input1=*/ 1, /*input2=*/ 2);
//     }, 10);
// }
//
// function step2(input1, input2, callback) {
//     setTimeout(function() {
//         console.log('Done async step 2:');
//         callback( /*err=*/ null, /*input3=*/ input1 + input2 + 3);
//     }, 10);
// }
//
// function step3(input3, callback) {
//     setTimeout(function() {
//         console.log('Done async step 3:');
//         callback( /*err=*/ null, /*result=*/ input3 + 4);
//     }, 10);
// }
//
// // result is whatever is passed from step3 callback
// function finalCallback(err, result) {
//     // result == 10 (1 + 2 + 3 + 4)
//     console.log('result: ' + result);
//     //res.send('result: ' + result);
// }
//
// // router.get('/', function(req, res, next) {
// //     async.waterfall([
// //             function(callback) {
// //                 step1(callback);
// //             },
// //             function(input1, input2, callback) {
// //                 step2(input1, input2, callback);
// //             },
// //             function(input3, callback) {
// //                 step3(input3, callback);
// //             },
// //         ],
// //         finalCallback
// //     );
// // });




module.exports = router;
