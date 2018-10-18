const welcomeMsg: string = require('../../constants/convoStrings/convoStrings').initialWelcome;

module.exports = (controller: any) => {
  controller.on('facebook_optin', function(bot: any, message: any) {
    bot.reply(message, welcomeMsg);
  });
};