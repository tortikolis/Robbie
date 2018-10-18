const fetchData = require('../fetch/fetch');
const apiEndpoints = require('../../constants/endpoints/endpoints');


class GetData {
  
  getCategoryJoke(category){
    const endpoint: string = `${apiEndpoints.categoryJoke}[${category}]`;
    return fetchData(endpoint).then((data) => data.value.joke)
  }

  getRandomJoke(){
    const endpoint: string = apiEndpoints.randomJoke;
    return fetchData(endpoint).then((data) => data.value.joke)
  }

  getPrank(name){

  }
}

module.exports = new GetData();