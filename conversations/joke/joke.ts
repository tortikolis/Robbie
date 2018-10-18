//const categories = require('../../services/categories/categoryService');
const jokeRequest = require('../../constants/hearWords/hearWords').joke;
const jokeConvo = require('../../constants/convoStrings/convoStrings').jokeConvo;
const askCategories = require('../../constants/convoStrings/convoStrings').askCategories;
const getJoke = require('../../services/getData/getData').getJoke;

module.exports = (controller: any) => {

   controller.hears(jokeRequest, 'message_received', function(bot: any, message: any) {
     bot.startConversation(message, (err: Error, convo: any) => {
       convo.say(jokeConvo);
       //ask izdvojiti u posebnu rekurzivnu funkciju ili ponuditi dugmad kategorije
        convo.ask(askCategories, (response, convo) => {
          if(askCategories.includes(response.text)){
            getJoke(response.text)
              .then((jokeRes) => {
                convo.say(`Here it is: ${jokeRes}`);
                convo.next();
              })     
          } else {
            //ponoviti ask
          }  
        })
    });
  });
};