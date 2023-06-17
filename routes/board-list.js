var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('board-list');
});

/* GET home page. */
router.get('/list', function(req, res, next) {

  var con = mysql.createConnection({
    host: "conative.myds.me",
    user: "root",
    password: "kyj123",
    port: 8085,
    database:'Visor',
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(`SELECT * FROM board`, function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log("Result: " + result);
    });
  });
});

module.exports = router;
