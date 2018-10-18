const fetchData = require('../fetch/fetch');
const apiEndpoints = require('../../constants/endpoints/endpoints');
class GetData {
    getCategoryJoke(category) {
        const endpoint = `${apiEndpoints.categoryJoke}[${category}]`;
        return fetchData(endpoint).then((data) => data.value.joke);
    }
    getRandomJoke() {
        const endpoint = apiEndpoints.randomJoke;
        return fetchData(endpoint).then((data) => data.value.joke);
    }
    getPrank(name) {
    }
}
module.exports = new GetData();
//# sourceMappingURL=getData.js.map