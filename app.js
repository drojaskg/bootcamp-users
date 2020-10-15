const http = require('http');
const express = require('express');
const app = express();
const url = require('url');
var data = require('./data');

const PORT = process.env.PORT || 3000;

// server.on('request', async (req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');

//     var url_parts = url.parse(req.url, true);
//     var query = url_parts.query;

//     console.log(query);

//     let user = data.getUser(query.email, query.password);

//     res.end(JSON.stringify(user));
// });

app.get('/', (req, res) => {
    console.log(req.query);

    let user = data.getUser(req.query.email, req.query.password);

    res.status(200).json(user)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})