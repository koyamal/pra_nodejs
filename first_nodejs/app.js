const express = require('express');
const mysql = require('mysql');

const app = express();

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);