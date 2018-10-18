const endConvo = require('../../constants/convoStrings/convoStrings').endConvo;
const endHear = require('../../constants/hearWords/hearWords').end;

module.exports = (controller: any) => {
  const endConvo = ['ok', 'thanks', 'great'];

  controller.hears(endHear, 'message_received, facebook_postback', (bot: any, message: any) => {
      bot.startConversation(message, (err: Error, conversation : any) => {
          conversation.say(endConvo);
          //show options
      })
  })
}