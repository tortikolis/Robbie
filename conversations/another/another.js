const anotherRequest = require('../../constants/hearWords/hearWords').more;
const randomJoke = require('../../services/getData/getData').getJoke('random');
module.exports = (controller) => {
    controller.hears(anotherRequest, 'message_received, facebook_postback', (bot, message) => {
        randomJoke.then((jokeRes) => {
            bot.replyWithTyping(message, jokeRes);
        });
    });
};
//# sourceMappingURL=another.js.map