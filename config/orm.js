var connection = require("../connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// another function for building queries
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (ob.hasOwnProperty(key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// define our orm that will be exported to the burgers.js model
var orm = {
  // selectAll function for grabbing everything from the table
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      // send the query result back to the callback function
      cb(result);
    });
  }
};

// export the orm back to the model burger.js
module.exports = orm;
