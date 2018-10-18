const categories = require('../../services/categories/categoryService');
module.exports = (controller) => {
    const jokeRequest = ['joke', 'jest', 'fun', 'funny', 'chuck', 'noris'];
    // controller.hears(jokeRequest, 'message_received', function(bot, message) {
    //   bot.startConversation(message, (err: Error, convo) => {
    //     convo.say('Sure! Do you want random joke or specific one from some of categories:');
    //     categories.then((cat) => {
    //       convo.ask(cat, (response, convo) => {
    //         convo.say('Here it is: ' + response.text);
    //         convo.next();
    //       });
    //     })
    //   });
    // });
};
//# sourceMappingURL=joke.js.map