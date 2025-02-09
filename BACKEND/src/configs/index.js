/*var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router; */

const config = {
  DB_CONNECTION_STRING: process.env.MONGODB_URL,
  GOOGLE_CLIENT_ID: process.env.MONGODB_URL,
  GOOGLE_CLIENT_SECRET: process.env.MONGODB_URL,
  GOOGLE_REDIRECT_URL: process.env.MONGODB_URL,
  SESSION_SECRET: process.env.SESSION_SECRET,
};

export default config;
