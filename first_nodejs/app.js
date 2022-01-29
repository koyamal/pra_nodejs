const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const { NULL } = require('mysql/lib/protocol/constants/types');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);
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

app.use((req, res, next) =>{
  if (req.session.userName === undefined){
    res.locals.userName = "Guest";
    res.locals.isLogin = false;
  }else{
    res.locals.userName = req.session.userName;
    res.locals.isLogin = true;
  }
  next();
});
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/second/:id', (req, res) =>{
  connection.query(
    'SELECT * FROM users',
    (error, results) =>{
      res.render('second.ejs', {itemId: req.params.id, usersInfo: results});
    }
  );
});

app.get('/login', (req, res) =>{
  res.render('login.ejs', {msg: ""});
});

app.post('/login', (req, res) =>{
  const email = req.body.email;
  const password = req.body.password;
  if (email === ""){
    res.render('login.ejs', {msg: "Error: Input your e-mail address!"});
  }else{
    connection.query(
      'SELECT * FROM users WHERE email = ?',
      [email],
      (error, results) =>{
        if (results.length > 0){
          if (results[0].password === password){
            req.session.userName = results[0].name;
            console.log(results[0].name + ", Welcome!");
            res.redirect('/');
          } else {
            console.log("Login failed password error!");
            res.render('login.ejs', {msg: "Error: Your e-mail or password is incorrect!"});
          }
        } else {
          console.log("Login failed email error!");
          res.render('login.ejs', {msg: "Error: Your e-mail or password is incorrect!"});
        }
      }
    );
  }
});

app.get('/logout', (req, res) =>{
  req.session.destroy((error) =>{
    res.redirect('/');
  });
});

app.listen(3000);