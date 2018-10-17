const Botkit = require('botkit');
require('dotenv').config();

const controller = Botkit.facebookbot({
  access_token: process.env.access_token,
  verify_token: process.env.verify_token,
})

const server = require('./server/server')(controller);