const endConvo = require('../../constants/convoStrings/convoStrings').endConvo;
const endHear = require('../../constants/hearWords/hearWords').end;
const endAttachment = require('../../constants/attachments/attachments').endAttachment;
module.exports = (controller) => {
    controller.hears(endHear, 'message_received, facebook_postback', (bot, message) => {
        bot.startConversation(message, (err, conversation) => {
            conversation.say(endConvo);
            //show options
            conversation.say({
                attachment: endAttachment
            });
            conversation.next();
        });
    });
};
//# sourceMappingURL=endConversation.js.map