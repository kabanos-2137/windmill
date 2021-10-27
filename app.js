//Imports
const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Routers
const indexRouter = require('./routes/index')
app.use('/', indexRouter);

app.set('view engine', 'ejs'); //Set the default view engine

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => { //Let the server listen on the specified port
  console.log(`App listening at http://localhost:${port}`);
});