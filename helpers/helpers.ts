module.exports = {
    getCategoryFromString: (str: string) => {
        let category: string = '';

        if(str.includes('random' || 'Random')){
            category = 'random';
        } else if (str.includes('explicit' || 'Explicit')){
            category = 'explicit';
        } else if (str.includes('nerdy' || 'Nerdy')){
            category = 'nerdy';
        } 
        return category;
    },

    capitalizeWords: (word: string) => {
        return word[0] + word.slice(1);
    },

    checkIfOnlyLetters: (str: string) => {
        const regEx = /^[a-zA-Z\s]*$/;
        return regEx.test(str);
    }
}
