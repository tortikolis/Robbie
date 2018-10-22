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
    },
    capitalizeWords: (word) => {
        return word[0] + word.slice(1);
    },
    checkIfOnlyLetters: (str) => {
        const regEx = /^[a-zA-Z\s]*$/;
        return regEx.test(str);
    }
};
//# sourceMappingURL=helpers.js.map