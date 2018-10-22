const welcomeMsg: string = require('../../constants/convoStrings/convoStrings').initialWelcome;
const manuConfig: any = require('../../config/manuConfig');
module.exports = (controller: any) => {
  controller.api.messenger_profile.menu([manuConfig]);

  controller.on('facebook_optin', (bot: any, message: any) => {
    bot.reply(message, welcomeMsg);
  });
};