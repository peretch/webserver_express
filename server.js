const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static(`${__dirname}/public`));

// Express HBS engine
hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', {
        name: 'SEBASTIÁN PEREZ'
    })
})

app.get('/about', function (req, res) {
    res.render('about')
})
 
app.listen(port, () => {
    console.log(`Starting server at port ${port}...`)
})