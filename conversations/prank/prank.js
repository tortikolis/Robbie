const prankRequest = require('../../constants/hearWords/hearWords').prank;
const prankConvo = require('../../constants/convoStrings/convoStrings').prankConvo;
const getPrank = require('../../services/getData/getData').getPrank;
const prankAttachment = require('../../constants/attachments/attachments').jokeAttachment;
module.exports = (controller) => {
    let firstName = null;
    let lastName = null;
    let category = null;
    controller.hears(prankRequest, 'message_received', (bot, message) => {
        bot.startConversation(message, (err, conversation) => {
            conversation.say(prankConvo.category);
            conversation.ask({ attachment: prankAttachment }, (response, conversation) => {
                category = response.text;
                conversation.next();
            });
            conversation.ask(prankConvo.firstName, (response, conversation) => {
                if (!/\d/.test(response.text)) {
                    firstName = response.text;
                    conversation.next();
                    conversation.ask(prankConvo.lastName, (response, conversation) => {
                        if (!/\d/.test(response.text)) {
                            lastName = response.text;
                            getPrank(category, firstName, lastName)
                                .then((prank) => {
                                conversation.say(`Here's a ${category} prank for ${firstName}: ${prank}`);
                                conversation.next();
                            });
                        }
                    });
                }
                else {
                    bot.reply(message, prankConvo.badFirstName);
                }
            });
        });
    });
};
//# sourceMappingURL=prank.js.map