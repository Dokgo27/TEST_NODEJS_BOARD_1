var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('write');
});

router.post('/', function(req, res, next) {
  console.log(req.body)

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
    con.query(`INSERT INTO board(title, writer, content) values ('${req.body.title}', '${req.body.writer}', '${req.body.content}')`, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });



  res.send('ok');


});

module.exports = router;
