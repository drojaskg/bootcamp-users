const cors = require('cors')
const express = require('express');
const app = express();
var data = require('./data');

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    console.log(req.query);

    let user = data.getUser(req.query.email, req.query.password);

    res.status(200).json(user)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})