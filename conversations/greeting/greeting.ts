
const greetingMsg = require('../../constants/hearWords/hearWords').greeting;
const greetingConvo = require('../../constants/convoStrings/convoStrings').greetingConvo;

module.exports = (controller: any) => {
  controller.hears(greetingMsg, 'message_received', function(bot, message) {
    bot.startConversation(message, (err : Error, convo: any) => {
      convo.say(greetingConvo[0]);
      convo.say(greetingConvo[1]);
      convo.next();
    });
  });
};