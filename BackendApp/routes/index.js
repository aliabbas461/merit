const express = require('express');
const app = express();

const authRouter = require('./authRoutes');
const googleRouter = require('./spreadsheetRoutes');
const todoRouter = require('./todoRoutes');

app.use('/user', authRouter);
app.use('/google', googleRouter)
app.use('/todo', todoRouter);

module.exports = app;
