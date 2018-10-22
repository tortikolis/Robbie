const Botkit = require('botkit');
const initial = require('./conversations/initial/initial');
const greeting = require('./conversations/greeting/greeting');
const joke = require('./conversations/joke/joke');
require('dotenv').config();
const controller = Botkit.facebookbot({
    access_token: process.env.access_token,
    verify_token: process.env.verify_token,
    require_delivery: true,
});
const server = require('./server/server')(controller);
initial(controller);
greeting(controller);
joke(controller);
//# sourceMappingURL=bot.js.map