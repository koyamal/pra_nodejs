const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'first'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/second/:id', (req, res) =>{
  connection.query(
    'SELECT * FROM users',
    (error, results) =>{
      res.render('second.ejs', {itemId: req.params.id, userInfo: results[0]});
    }
  );
});

app.listen(3000);