const endConvo = require('../../constants/convoStrings/convoStrings').endConvo;
const endHear = require('../../constants/hearWords/hearWords').end;
const endAttachment = require('../../constants/attachments/attachments').endAttachment;

module.exports = (controller: any) => {

  controller.hears(endHear, 'message_received, facebook_postback', (bot: any, message: any) => {
      bot.startConversation(message, (err: Error, conversation : any) => {
          conversation.say(endConvo);
          //show options
          conversation.say({
              attachment: endAttachment
          })
          conversation.next();
      })
  })
}