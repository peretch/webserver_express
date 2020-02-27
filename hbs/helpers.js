const hbs = require('hbs');

// HBS helpers
hbs.registerHelper('getYear', () => new Date().getFullYear());
hbs.registerHelper('capitalize', text => {
    console.log('we');
    let words = text.split(' ');
    words.forEach((word, index) => {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(' ');
});