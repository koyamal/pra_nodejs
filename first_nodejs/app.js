const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const { NULL } = require('mysql/lib/protocol/constants/types');
const fetch = require('node-fetch');


const app = express();
let deleteUser = "";
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
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

const mode = 0;

app.use((req, res, next) =>{
  if(mode === 1){
    console.log("1");
  }
  next();
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
  next();
});

app.use((req, res, next) =>{
  if(mode === 1){
    console.log("2");
  }
  next();
});

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
  if(mode === 1){
    console.log("/");
  }
  res.render('index.ejs');
});

app.use((req, res, next) =>{
  if(mode === 1){
    console.log("3");
  }
  next();
});

app.get('/second/:id', (req, res) =>{
  if(mode === 1){
    console.log("/second");
  }
  connection.query(
    'SELECT * FROM users',
    (error, results) =>{
      res.render('second.ejs', {itemId: req.params.id, usersInfo: results});
    }
  );
});

app.get('/login', (req, res) =>{
  if(mode === 1){
    console.log("/login");
  }
  res.render('login.ejs', {msg: ""});
});

app.use((req, res, next) =>{
  if(mode === 1){
    console.log("4");
  }
  next();
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
            console.log("  - Inputed email: " + email);
            console.log("  - Inputed password: " + password);
            res.render('login.ejs', {msg: "Error: Your e-mail or password is incorrect!"});
          }
        } else {
          console.log("Login failed e-mail error");
          console.log("  - Inputed email: " + email);
          console.log("  - Inputed password: " + password);
          res.render('login.ejs', {msg: "Error: Your e-mail or password is incorrect!"});
        }
      }
    );
  }
});

app.get('/singup', (req, res) =>{
  if(mode === 1){
    console.log("/singup");
  }
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
  if(mode === 1){
    console.log("/logout");
  }
  req.session.destroy((error) =>{
    res.redirect('/');
  });
});

app.get('/mypage', (req, res) =>{
  if(mode === 1){
    console.log("/mypage");
  }
  res.render('mypage.ejs');
});

app.get('/delete', (req, res)=>{
  if(mode === 1){
    console.log("/delete");
  }
  res.render('delete.ejs');
});

app.get('/complete_delete', (req, res) =>{
  if(mode === 1){
    console.log("/complete_delete");
  }
  connection.query(
    'DELETE FROM users WHERE email = ?',
    [res.locals.userInfo.email],
    (error, results) =>{
      req.session.destroy((error) =>{
        deleteUser = res.locals.userName;
        res.redirect('/after_delete');
      });
    }
  );
});

app.get('/after_delete', (req, res) =>{
  if(mode === 1){
    console.log("/after_delete");
  }
  res.render('message.ejs', {msg: "Delete: " + deleteUser + ", Successfully!"});
});

app.get('/delete_by_admin', (req, res) =>{
  if(mode === 1){
    console.log("/delete_by_admin");
  }
  connection.query(
    'SELECT * FROM users',
    (error, results) =>{
      res.render('deletebyadmin.ejs', {itemId: req.params.id, usersInfo: results});
    }
  );
});

app.post('/complete_delete_by_admin', (req, res) =>{
  connection.query(
    'DELETE FROM users WHERE id = ?',
    [req.body.id],
    (error, results) =>{
      res.redirect('/delete_by_admin');
    }
  );
});

app.post('/delete_by_admin_link/:id', (req, res) =>{
  connection.query(
    'DELETE FROM users WHERE id = ?',
    [req.params.id],
    (error, results) =>{
      res.redirect('/delete_by_admin');
    }
  );
});

app.get('/view_fruits', (req, res) =>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
  if(mode === 1){
    console.log("/view_fruits");
  }
  connection.query(
    'SELECT * FROM fruits;',
    (error, results) =>{
      res.render('viewfruits.ejs',{fruits: results});
    }
  );
});

app.post('/delete_fruits', (req, res) =>{
  console.log(req.body.fruits);
  const fruits = req.body.fruits;
  if (typeof(fruits) === "string"){
    connection.query(
      'DELETE FROM fruits WHERE name = ?;',
      [fruits],
      (error, results) =>{
      }
    );
  }else if(fruits !== undefined){
    fruits.forEach((fruit) =>{
      connection.query(
        'DELETE FROM fruits WHERE name = ?;',
        [fruit],
        (error, results) =>{
        }
      );
    })
  }
  res.redirect('/view_fruits');
});

app.post('/delete_fruits_link/:name',(req, res) =>{
  connection.query(
    'DELETE FROM fruits WHERE name = ?',
    [req.params.name],
    (error, results) =>{
      res.redirect('/view_fruits');
    }
  );
});

app.post('/add_fruit', (req, res) =>{
  connection.query(
    'INSERT INTO fruits (name) VALUES (?);',
    [req.body.fruitname],
    (error, results) =>{
      res.redirect('/view_fruits');
    }
  );
});

app.get('/test_async', (req, res) =>{
  console.log('async_test1');
  (async function (){
    const c = await setTimeout(function(){
      res.redirect('/login');
      console.log('hello');
    }, 2000);
    console.log('test_async1');
  })();
});

app.get('/test_async2', (req, res) =>{
  console.log('async_test2');
  (async function (){
    const c = await fetch('http://localhost:3000/test_async');
    //console.log(c);
    console.log('test_async2');
    res.redirect('/');
  })();
});

app.get('/temp01', (req, res) =>{
  console.log('This is temp01');
  res.redirect('/');
});

app.get('/temp02', (req, res) =>{
  console.log('This is temp02');
  res.redirect('/');
});

app.get('/test_async3', (req, res) =>{
  (async function(){
    const fetchs = new Set();
    fetchs.add(fetch('http://localhost:3000/temp01'));
    fetchs.add(fetch('http://localhost:3000/temp02'));
    //fetchs.add(fetch('http://localhost:3000/test_async'));
    //fetchs.add(fetch('http://localhost:3000/test_async2'));
    const c = await Promise.all(fetchs);
    console.log(c);
    res.redirect('/');
  })();
});

app.get('/test_async4', (req, res) =>{
  (async function(){
    const c = fetch('http://localhost:3000/add_fruit_temp', {method: 'POST'});
    res.redirect('/view_fruits');
  })();
});

app.post('/add_fruit_temp', (req, res) =>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
  let val = 'Fetched';
  console.log(req.body);
  if (req.body){
    //val = req.body.a;
    console.log(`val: ${val}`);
  }
  connection.query(
    'INSERT INTO fruits (name) VALUES (?);',
    [val],
    (error, results) =>{
      res.redirect('/view_fruits');
    }
  );
});

app.use((req, res, next) =>{
  if(mode === 1){
    console.log("fin.");
  }
  next();
});

app.listen(3000);