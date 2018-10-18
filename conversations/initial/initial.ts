module.exports = (controller: any) => {
  controller.on('facebook_optin', function(bot, message) {
    bot.reply(message, 'Hello, my name is Robbie and I can make you laugh! Welcome!');
  })
}