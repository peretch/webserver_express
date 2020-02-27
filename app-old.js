const http = require('http');

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-type': 'application/json'});

    let output = {
        name: 'Peretch',
        age: 35,
        url: req.url
    };

    res.write(JSON.stringify(output));
    // res.write('Hello world');
    
    res.end();
}).listen(3000);

console.log('Starting in 3000');