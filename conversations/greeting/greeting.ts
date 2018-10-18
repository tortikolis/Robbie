// const strings = {
//   greetingMsg: ['hello', 'hi', 'howdy', 'cao', 'hola', 'hey'],
//   convoStrings: ['Hi there, let me introduce myself. My name is Robbie and I am funny bot!', 'What can I do for you?']
// }
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