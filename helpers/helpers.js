module.exports = {
    getCategoryFromString: (str) => {
        let category = '';
        if (str.includes('random' || 'Random')) {
            category = 'random';
        }
        else if (str.includes('explicit' || 'Explicit')) {
            category = 'explicit';
        }
        else if (str.includes('nerdy' || 'Nerdy')) {
            category = 'nerdy';
        }
        return category;
    }
};
//# sourceMappingURL=helpers.js.map