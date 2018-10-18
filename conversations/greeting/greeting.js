const strings = {
    greetingMsg: ['hello', 'hi', 'howdy', 'cao', 'hola', 'hey'],
    convoStrings: ['Hi there, let me introduce myself. My name is Robbie and I am funny bot!', 'What can I do for you?']
};
module.exports = (controller) => {
    const { greetingMsg, convoStrings } = strings;
    controller.hears(greetingMsg, 'message_received', function (bot, message) {
        bot.startConversation(message, (err, convo) => {
            convo.say(convoStrings[0]);
            convo.say(convoStrings[1]);
            convo.next();
        });
    });
};
//# sourceMappingURL=greeting.js.map