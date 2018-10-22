const welcomeMsg = require('../../constants/convoStrings/convoStrings').initialWelcome;
const manuConfig = require('../../config/manuConfig');
module.exports = (controller) => {
    controller.api.messenger_profile.menu([manuConfig]);
    controller.on('facebook_optin', (bot, message) => {
        bot.reply(message, welcomeMsg);
    });
};
//# sourceMappingURL=initial.js.map