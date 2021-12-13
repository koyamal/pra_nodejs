const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mysql = require('mysql');

const app = express();

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/second/:id', (req, res) =>{
  res.render('second.ejs', {itemId: req.params.id});
});

app.listen(3000);