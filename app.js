const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const indexRouter = require('./routes/index')

const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});