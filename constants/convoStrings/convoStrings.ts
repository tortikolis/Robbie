const convoStrings: object = {
  greetingConvo: 
  ['Hi there, let me introduce myself. My name is Robbie and I am funny bot!', 
  'I can tell you joke or prank, so wich one do you want?'],

  initialWelcome: 'Hello! My name is Robbie and I can make you laugh. Say hello to start conversation',

  jokeConvo: 'Sure! Do you want random joke or specific one from some of categories:',

  askCategories: ['explicit', 'nerdy'],

  endConvo: 'Anytime! Happy to make your day...',

  prankConvo: {
    category: 'Sure! Choose a joke category for a prank?',
    firstName: 'What’s your friend first name?',
    badName: 'This does not look like a real name let’s try again. What’s your friend first name?',
    lastName: 'What’s your friend last name?',
    
  }
}

module.exports = convoStrings;