const http = require('http');
const port = 3000;
const server = http.createServer();
const url = require('url');
var data = require('./data');

const PORT = process.env.PORT || 3000;

server.on('request', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    console.log(query);

    let user = data.getUser(query.email, query.password);

    res.end(JSON.stringify(user));
});

server.listen(PORT, () => {
    console.log(`Server running`);
});