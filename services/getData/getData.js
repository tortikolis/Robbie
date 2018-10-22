const fetchData = require('../fetch/fetch');
const apiEndpoints = require('../../constants/endpoints/endpoints');
class GetData {
    getJoke(category) {
        const endpoint = category === 'random' ?
            apiEndpoints.randomJoke :
            `${apiEndpoints.categoryJoke}[${category}]`;
        return fetchData(endpoint).then((data) => data.joke);
    }
    getRandomJoke() {
        const endpoint = apiEndpoints.randomJoke;
        return fetchData(endpoint).then((data) => data.joke);
    }
    getPrank(category, firstName, lastName) {
        const endpoint = `${apiEndpoints.randomJoke}?exclude[${category}?&firstName=${firstName}&lastName=${lastName}`;
        console.log(endpoint);
        return fetchData(endpoint).then((data) => data.joke);
    }
}
module.exports = new GetData();
//# sourceMappingURL=getData.js.map