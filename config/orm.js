var connection = require("../connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
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
  },

  // Function that insert a single table entry
  insertOne: function(table, cols, vals, cb) {
    // Construct the query string that inserts a single row into the target table
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    // console.log(queryString);

    // Perform the database query
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      // Return results in callback
      cb(result);
    });
  },

  // Function that updates a single table entry
  updateOne: function(table, objColVals, condition, cb) {
    // Construct the query string that updates a single entry in the target table
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    // console.log(queryString);

    // Perform the database query
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      // Return results in callback
      cb(result);
    });
  }
};

// export the orm back to the model burger.js
module.exports = orm;
