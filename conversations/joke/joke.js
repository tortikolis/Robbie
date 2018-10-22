const jokeRequest = require('../../constants/hearWords/hearWords').joke;
const jokeConvo = require('../../constants/convoStrings/convoStrings').jokeConvo;
const getJoke = require('../../services/getData/getData').getJoke;
const jokeAttachment = require('../../constants/attachments/attachments').jokeAttachment;
const hearCategory = require('../../constants/hearWords/hearWords').category;
const getCategoryFromString = require('../../helpers/helpers').getCategoryFromString;
module.exports = (controller) => {
    controller.hears(jokeRequest, 'message_received', (bot, message) => {
        bot.startConversation(message, (err, conversation) => {
            conversation.say(jokeConvo);
            conversation.say({ attachment: jokeAttachment });
            controller.hears(hearCategory, 'message_received, facebook_postback', (bot, message) => {
                const category = message.payload || getCategoryFromString(message.text);
                getJoke(category)
                    .then((jokeRes) => {
                    bot.replyWithTyping(message, `Here it is: ${jokeRes}`);
                    conversation.next();
                });
            });
        });
    });
};
//# sourceMappingURL=joke.js.map