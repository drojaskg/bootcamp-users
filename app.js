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

app.get('/videos', (req, res) => {
    console.log(req.query);

    let videos = data.getVideos(req.query.search);

    res.status(200).json(videos)
})

app.get('/video', (req, res) => {
    console.log(req.query);

    let video = data.getVideo(req.query.id);

    res.status(200).json(video)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})