const fetchData = require('../fetch/fetch');
const apiEndpoints = require('../../constants/endpoints/endpoints');
const capitalizeName = require('../../helpers/helpers').capitalizeWords;

class GetData {
  
  getJoke(category: string){
    const endpoint: string = category === 'random' ?
    apiEndpoints.randomJoke :
    `${apiEndpoints.categoryJoke}[${category}]`;
    
    return fetchData(endpoint).then((data) => data.joke)
  }

  getRandomJoke(){
    const endpoint: string = apiEndpoints.randomJoke;
    return fetchData(endpoint).then((data) => data.joke)
  }

  getPrank(category: string, firstName: string, lastName: string){
    firstName = capitalizeName(firstName);
    lastName = capitalizeName(lastName);
    
    const endpoint: string = `${apiEndpoints.randomJoke}?exclude[${category}?&firstName=${firstName}&lastName=${lastName}`;
    console.log(endpoint);
    return fetchData(endpoint).then((data) => data.joke)
  }
}

module.exports = new GetData();