const Botkit = require('botkit');
const initial = require('./conversations/initial/initial');
const greeting = require('./conversations/greeting/greeting');
const joke = require('./conversations/joke/joke');
const another = require('./conversations/another/another');
const endConversation = require('./conversations/endConversation/endConversation');
const prank = require('./conversations/prank/prank');
require('dotenv').config();
const controller = Botkit.facebookbot({
    access_token: process.env.access_token,
    verify_token: process.env.verify_token,
    receive_via_postback: true,
});
const server = require('./server/server')(controller);
initial(controller);
greeting(controller);
joke(controller);
prank(controller);
another(controller);
endConversation(controller);
//# sourceMappingURL=bot.js.map