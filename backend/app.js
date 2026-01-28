const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const connectDb = require('./config/db.js');
const session = require('express-session');
require('dotenv').config();
const SESSION_SECRET = process.env.SESSION_SECRET;

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
    credentials: true
}))
app.use(session({
  name: 'sid',
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60
  }
}));

app.use('/api/auth', authRoutes);

module.exports = app;
