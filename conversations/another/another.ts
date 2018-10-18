const anotherRequest = require('../../constants/hearWords/hearWords').more;
const randomJoke = require('../../services/getData/getData').getRandomJoke;

module.exports = (controller: any) => {
  controller.hears(anotherRequest, 'message_received, facebook_postback', (bot: any, message: any) => {
      randomJoke.then((jokeRes: string) => {
          bot.replyWithTyping(message,jokeRes);
      })
  })
}