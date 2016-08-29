/**
 * MyActionsController
 *
 * @description :: Server-side logic for managing Myactions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list_info: function(req, res) {

    var req_user_UID = req.body.UID;
    //console.log("Got JSCID: " + req_user_JSCID);

    async.waterfall([
        function(callback) {
          // find actions assigned to UID
          MyActions.find({
            Assignees: req_user_UID
          }).exec(function(err, results) {
            if (err) {
              callback(err);
            }
            sails.log('Wow, there are %d actions(s) assigned to user ' + req_user_UID + '.', results.length);
            callback(null, results);
          });
        },
        function(resu, callback){
          var x = JSON.stringify(resu);
          //sails.log("x: " + x);
          var actionsArray = JSON.parse(x);

          var actions_temp = [actionsArray.length];
          for (var i = 0; i < actionsArray.length; i++) {
            //console.log("Array[" + i + "] Action ID: " + actionsArray[i].ActionID);
            actions_temp[i] = actionsArray[i].ActionID;
            if(i == actionsArray.length-1){
              console.log("finished copying array");
              callback(null, actions_temp);
            }
          }

        },
        function(actions_temp, callback) {


          // var myQuery = "select TOP 10 * from [JATS].[jats_user].[ActionDetails]";
          // var myQuery2 = "SELECT ActionID FROM [JATS].[jats_user].[ActionDetails] WHERE ActionID = '432'";
          // var myQuery3 = "SELECT * FROM [JATS].[jats_user].[ActionDetails] WHERE ActionID = '432'";
          // var myQuery4 = "SELECT * FROM [JATS].[jats_user].[ActionDetails] WHERE ActionID IN ('432', '1162', '1298')";
          //
          // var tempArray = ['432', '1162', '1298'];
          // // tempArray[0] = '432';
          // // tempArray[1] = '1162';
          // // tempArray[2] = '1298';
          // for (var i = 0; i < tempArray.length; i++) {
          //   console.log("Array[" + i + "] Action ID: " + tempArray[i]);
          // }
          //
          // var ids = [432, 1162, 1298];
          //
          // //var energy = ids.join();
          //
          // //var idList = implode(',', tempArray);
          // var myQuery5 = 'SELECT * FROM [JATS].[jats_user].[ActionDetails] WHERE ActionID IN (' + tempArray.join() +')';

          var myQuery6 = 'SELECT * FROM [JATS].[jats_user].[ActionDetails] WHERE ActionID IN (' + actions_temp.join() +')';

          //SELECT EmployeeID, FirstName, LastName, HireDate, City FROM Employees
          //WHERE City IN ('Seattle', 'Tacoma', 'Redmond')

          sails.log.debug("Query :", myQuery6);

          //console.log(Advisor);

          GetActions.query(myQuery6, function(err, results) {
            //console.log(results);
            //console.log(err);
            if (err) {
              return res.json({
                "status": 0,
                "error": err
              });
            } else {
              sails.log('Wow, got all the action details');
              return res.json(results);
            }
          });

          // GetActions.query({
          //   text: 'select TOP 10 * from [JATS].[jats_user].[ActionDetails]'
          // }, function(err, results) {
          //   if (err) return res.serverError(err);
          //   return res.ok(results.rows);
          // });
          // for (var i = 0; i < actionsArray.length; i++) {
          //   console.log("Array[" + i + "] Action ID: " + actionsArray[i].ActionID);
          // }

          // MyActions.query('select ActionID from MyActions where Assignees = 872', function(err, results) {
          //   if (err) // handle error
          //     console.log(results);
          // });

          // MyActions.query({
          //   text: 'SELECT ActionAssigns.ActionID FROM ActionAssigns WHERE ActionAssigns.Assignees = $1',
          //   values: [872]
          // }, function(err, results) {
          //   if (err) return res.serverError(err);
          //   return res.ok(results.rows);
          // });

          //         SELECT TOP 5 [ActionAssignID]
          //     ,[ActionID]
          //     ,[Assignees]
          //     ,[GID]
          //     ,[StatusID]
          //     ,[AssignedDate]
          //     ,[AssignedTime]
          //     ,[Reassign]
          //     ,[ReassignDate]
          //     ,[AA_Attachment]
          //     ,[AssignGroup]
          // FROM [JATS].[jats_user].[ActionAssigns]

          // async.forEachOf(actionsArray, function(value, key, callback) {
          // 	console.log("ActionID: " + value.ActionID);
          // 	GetActions.find({ ActionID: value.ActionID }).exec(function(err, results) {
          //   	  if (err) {
          //   	    return res.serverError(err);
          //   	  }
          // 			try {
          //         //console.log(JSON.stringify(results));
          // 				res.write(JSON.stringify(results) + "\n");
          // 				callback();
          //       } catch (e) {
          //         return callback(e);
          //       }
          //
          // });
          //
          // }, function(err) {
          //   if (err) console.error(err.message);
          //   // configs is now a map of JSON data
          //   // doSomethingWith(configs);
          // 	console.log("finished");
          // 	res.end();
          // });
          // for (var i = 0; i < actionsArray.length; i++) {
          // 	console.log("Action IDs: " + actionsArray[i].ActionID);
          // 	queryAction(actionsArray[i].ActionID, i, OnToNext);
          // }
          // function doThis(){
          // 	console.log("Finished");
          // 	res.end();
          // }
          // function OnToNext(){
          // 	console.log("OnToNext");
          // }
          // function queryAction(id, count, callback) {
          // 	GetActions.find({ ActionID: id }).exec(function(err, results) {
          // 	  if (err) {
          // 	    return res.serverError(err);
          // 	  }
          // 		console.log(results);
          // 		if (count === actionsArray.length-1){
          // 			doThis();
          // 		}else {
          // 			callback();
          // 		}
          //
          //
          // 	});
          //
          //
          // }



        }


        // for (var i = 0; i < actionsArray.length; i++) {
        //   // The loop makes several calls with different ActionIDs.
        // 	console.log("Action IDs: " + actionsArray[i].ActionID);
        //   //queryAction(actionsArray[i].ActionID, thingsToDoAfter);
        // }
        // var count = 0;
        //
        // function thingsToDoAfter() {
        // // I'd like any code here to be run only after the above has
        // // finished processing.
        // console.log("Finished");
        // //res.end();
        // }
        //
        // function queryAction(id, callback) {
        //   count++;
        // 	GetActions.find({ ActionID: id }).exec(function(err, results) {
        // 	  if (err) {
        // 	    return res.serverError(err);
        // 	  }
        // 		console.log(results);
        // 		//res.write(results);
        //
        // 		// var temp = id-1;
        // 		//queryAction(temp, callback);
        //
        // 	});
        //       count--;
        //       if (count === 0 && callback){
        // 				console.log("count==0 and callback");
        // 				callback();
        // 			}
        //
        //     }
        // 	}

        // var x = JSON.stringify(asgn);
        // //sails.log("x: " + x);
        // var z = JSON.parse(x);
        // sails.log("asgn: " + z[0].ActionID);
        // sails.log("asgn count: " + z.length);
        // var temp;
        // var check = z.length - 1;
        // for(var i=0;i < z.length;i++ ) {
        //
        // GetActions.find({
        //   ActionID: z[i].ActionID
        // }).exec(function(err, results) {
        //   if (err) {
        //     return res.serverError(err);
        //   }
        // 	temp++;
        //   ///var temp;                  //temp = results;
        //   //return res.send(temp[0].ActionID);
        // 	//return res.json({user: 'tobi'});
        //   //return res.json(results[0].ActionID);
        // 	if(true){
        // 		return res.send("temp");
        // 	}
        // });
      ],
      function(err) {
        if (err) {
          //req.flash('error', 'Failed to login: server error. Please contact the admin.');
          //res.redirect('/console/login');
          console.log("error: failed to find user");
        }
      });

  }
};
