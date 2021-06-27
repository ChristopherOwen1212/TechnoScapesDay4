var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');

// biar bisa access .env pake syntax process.env
var dotenv = require('dotenv');
dotenv.config();

var indexRouter = require('./routes/index');
// baru ditambahkan, lanjutan day 01...
var productsRouter = require('./routes/products');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// baru ditambahkan, lanjutan day 01...
app.use('/products', productsRouter);

module.exports = app;
