module.exports = () => {
    const fetch = require('node-fetch');
    fetch('http://api.icndb.com/categories')
        .then((res) => res.json())
        .then((categories) => categories.value.join(','));
};
//# sourceMappingURL=categoryService.js.map