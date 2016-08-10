/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: function(req, res) {
    return res.send("Hi there!");
  },
  list: function(req, res) {
    // var myQuery = "select TOP 10 * from advisor";
    //
    // sails.log.debug("Query :", myQuery);
    //
    // console.log(Advisor);
    User.find({
      ProductName: 'Product 1'
    }).exec(function(err, p_name) {
      if (err) {
        return res.serverError(err);
      }
      sails.log('Wow, there are %d users named Finn.  Check it out:', p_name.length, p_name);
      return res.json(p_name);
    });
    //   User.query('SELECT * FROM products'), function(err, results) {
    //       if (err) {
    //         res.send(400);
    //       } else {
    //         res.send(results);
    //       }
    //   }
  }
};
