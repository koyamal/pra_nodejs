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
    console.log('Error Connecting: ' + err.stack);
    return;
  }
  console.log('Connection Successfully!');
});

app.use((req, res, next) =>{
  if (req.session.userName === undefined){
    res.locals.userName = "Guest";
    res.locals.isLogin = false;
  }else{
    res.locals.userName = req.session.userName;
    res.locals.userInfo = req.session.userInfo;
    res.locals.isLogin = true;
  }
  //console.log('app.use');
  //console.log(req.session.userName)
  next();
});
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/second/:id', (req, res) =>{
  connection.query(
    'SELECT * FROM users',
    (error, results) =>{
      console.log(results[0]);
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
    console.log("Login failed e-mail error");
    res.render('login.ejs', {msg: "Error: Input your e-mail address!"});
  }else{
    connection.query(
      'SELECT * FROM users WHERE email = ?',
      [email],
      (error, results) =>{
        if (results.length > 0){
          if (results[0].password === password){
            req.session.userName = results[0].name;
            req.session.userInfo = results[0];
            console.log("Login: " + results[0].name);
            res.redirect('/');
          } else {
            console.log("Login failed password error");
            res.render('login.ejs', {msg: "Error: Your e-mail or password is incorrect!"});
          }
        } else {
          console.log("Login failed e-mail error");
          res.render('login.ejs', {msg: "Error: Your e-mail or password is incorrect!"});
        }
      }
    );
  }
});

app.get('/singup', (req, res) =>{
  res.render('singup.ejs', {msg: ""});
});

app.post('/singup', (req, res) =>{
  const uname = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  if (email === "" || password === "" || uname === ""){
    console.log("Error: Singup failed");
    res.render('singup.ejs', {msg: "Error: Singup failed, Input User Info(name, e-mail, password)"});
  }else{
    connection.query(
      'INSERT INTO users(name, email, password) values(?, ?, ?)',
      [uname, email, password],
      (error, results) =>{
        console.log(results);
        console.log(error);
        connection.query(
          'SELECT * FROM users WHERE email = ?',
          [email],
          (error02, results02) =>{
            console.log(results02);
            req.session.userName = results02[0].name;
            req.session.userInfo = results02[0];
            res.redirect('/');
          }
        );
      }
    );
  }
});

app.get('/logout', (req, res) =>{
  req.session.destroy((error) =>{
    res.redirect('/');
  });
});

app.get('/mypage', (req, res) =>{
  res.render('mypage.ejs');
});

app.get('/delete', (req, res)=>{
  res.render('delete.ejs');
});

app.get('/complete_delete', (req, res) =>{
  connection.query(
    'DELETE FROM users WHERE email = ?',
    [res.locals.userInfo.email],
    (error, results) =>{
      req.session.destroy((error) =>{
        //console.log("before message");
        //console.log(res.locals.userName);
        console.log("after session destroy");
        res.render('message.ejs', {msg: "Delete: " + res.locals.userName + ", Successfully!"});
      });
    }
  );
});

app.listen(3000);