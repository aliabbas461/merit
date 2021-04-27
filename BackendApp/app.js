var express = require('express');
var path = require('path');
const dotenv = require('dotenv');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dbConnection = require('./config/db');

const errorHandler = require('./middleware/errorHandlerMiddleware');
const notFound = require('./middleware/notFoundMiddleware');

const envPath = path.resolve(process.cwd(), './config/.env');
const cors = require('cors');

dotenv.config({ path: envPath });
const indexRouter = require('./routes/index');

// DB Connection
dbConnection();

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Root Router
app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(notFound);

// error handler
app.use(errorHandler)

module.exports = app;
