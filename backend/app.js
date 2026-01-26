const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const connectDb = require('./config/db.js');

connectDb();

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    methods: "*",
}))

app.use('/api/auth', authRoutes);

module.exports = app;
