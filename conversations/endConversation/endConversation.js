const endConvo = require('../../constants/convoStrings/convoStrings').endConvo;
const endHear = require('../../constants/hearWords/hearWords').end;
module.exports = (controller) => {
    controller.hears(endHear, 'message_received, facebook_postback', (bot, message) => {
        bot.startConversation(message, (err, conversation) => {
            conversation.say(endConvo);
            //show options
        });
    });
};
//# sourceMappingURL=endConversation.js.map