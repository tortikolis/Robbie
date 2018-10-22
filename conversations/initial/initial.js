const welcomeMsg = require('../../constants/convoStrings/convoStrings').initialWelcome;
module.exports = (controller) => {
    controller.on('facebook_optin', (bot, message) => {
        bot.reply(message, welcomeMsg);
    });
};
//# sourceMappingURL=initial.js.map