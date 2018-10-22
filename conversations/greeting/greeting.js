const greetingMsg = require('../../constants/hearWords/hearWords').greeting;
const greetingConvo = require('../../constants/convoStrings/convoStrings').greetingConvo;
module.exports = (controller) => {
    controller.hears(greetingMsg, 'message_received', function (bot, message) {
        bot.startConversation(message, (err, conversation) => {
            conversation.say(greetingConvo[0]);
            conversation.say(greetingConvo[1]);
            conversation.next();
        });
    });
};
//# sourceMappingURL=greeting.js.map