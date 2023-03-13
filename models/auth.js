const express = require('express');
const databaseCon = require('./database');
const session = require('express-session');
const { response, request } = require('express');


// Check record
const checkRecord = (req ,res ,uid, psw) => {
  const query = 'SELECT * FROM auth WHERE username=? AND password=?';
  databaseCon.query(query, [ uid, psw], (err, results, fields) => {
    if (err) throw err
    if (results.length > 0) {
      req.session.loggedin = true;
      req.session.name = req.body.Username;
      res.redirect('/temp');
    } else {
      res.redirect('/login')
    }
  })
};


// // Read all records
// const readRecords = () => {
//   const query = 'SELECT * FROM yourTable';
//   connection.query(query, (error, results) => {
//     if (error) throw error;
//     console.log(results);
//   });
// };

// // Update a record
// const updateRecord = (id, data) => {
//   const query = `UPDATE yourTable SET column1 = '${data.column1}', column2 = '${data.column2}', column3 = '${data.column3}' WHERE id = ${id}`;
//   databaseCon.query(query, (error, results) => {
//     if (error) throw error;
//     console.log(`Record updated with ID: ${id}`);
//   });
// };

// // Delete a record
// const deleteRecord = (id) => {
//   const query = `DELETE FROM yourTable WHERE id = ${id}`;
//   databaseCon.query(query, (error, results) => {
//     if (error) throw error;
//     console.log(`Record deleted with ID: ${id}`);
//   });
// };

// Close the connection
// databaseCon.end();
module.exports = checkRecord;