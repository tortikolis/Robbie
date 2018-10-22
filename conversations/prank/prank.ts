const prankRequest = require('../../constants/hearWords/hearWords').prank;
const prankConvo = require('../../constants/convoStrings/convoStrings').prankConvo;
const getPrank = require('../../services/getData/getData').getPrank;
const prankAttachment = require('../../constants/attachments/attachments').jokeAttachment;
const capitalize = require('../../helpers/helpers').capitalizeWords;
const checkIfOnlyLetters = require('../../helpers/helpers').checkIfOnlyLetters;

module.exports = (controller: any) => {
  let firstName : string = '';
  let lastName : string = '';
  let category : string = '';

  controller.hears(prankRequest, 'message_received', (bot: any, message: any) => {
    bot.startConversation(message, (err: Error, conversation: any) => {
      conversation.say(prankConvo.category);
      conversation.ask({ attachment : prankAttachment }, (response: any, conversation: any) => {
        category = response.text;
        conversation.next();
      });
      
      conversation.ask(prankConvo.firstName, (response: any, conversation: any) => {
        if(checkIfOnlyLetters(response.text)){
          firstName = response.text;
          conversation.next();
          conversation.ask(prankConvo.lastName, (response: any, conversation: any) => {
              if(checkIfOnlyLetters(response.text)){
              lastName = response.text;
               getPrank(category, firstName, lastName)
                .then((prank) => {
                    const capitalizedFirstName = capitalize(firstName);
                    conversation.say(`Here's a ${category} prank for ${capitalizedFirstName}: ${prank}`);
                    conversation.next();
                });   
              } else {
                bot.replyWithTyping(message, prankConvo.badName);
              };
          });  
        } else {
            bot.replyWithTyping(message, prankConvo.badName);
        };
      });
      
      
    });
  });
};