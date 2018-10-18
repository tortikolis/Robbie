module.exports = (url) => {
    const fetch = require('node-fetch');
    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};
//# sourceMappingURL=fetch.js.map