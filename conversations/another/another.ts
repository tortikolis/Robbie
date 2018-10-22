const anotherRequest = require('../../constants/hearWords/hearWords').more;
const randomJoke = require('../../services/getData/getData').getJoke('random');

module.exports = (controller: any) => {
    controller.hears(anotherRequest, 'message_received', (bot: any, message: any) => {
        randomJoke.then((jokeRes: string) => {
            bot.replyWithTyping(message, jokeRes);
        });
    });
};