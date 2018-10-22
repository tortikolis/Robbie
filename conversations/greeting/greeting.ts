const welcomeAttachment = require('../../constants/attachments/attachments').welcomeAttachment;
const greetingMsg = require('../../constants/hearWords/hearWords').greeting;
const greetingConvo = require('../../constants/convoStrings/convoStrings').greetingConvo;

module.exports = (controller: any) => {
  controller.hears(greetingMsg, 'message_received', (bot: any, message: any) => {
    bot.startConversation(message, (err : Error, conversation: any) => {
      conversation.say(greetingConvo[0]);
      conversation.say(greetingConvo[1]);
      conversation.say({ attachment : welcomeAttachment });
      conversation.next();
    });
  });
};