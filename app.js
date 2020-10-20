const cors = require('cors')
const express = require('express');
const app = express();
var data = require('./data');

const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
    console.log(req.query);

    let user = data.getUser(req.query.email, req.query.password);

    res.status(200).json(user)
})

app.get('/videos', (req, res) => {
    console.log(req.query);

    let videos = data.getVideos('youtube', req.query.search);

    res.status(200).json(videos)
})

app.get('/tutorials', (req, res) => {
    console.log("Aaron: Requested attackers - Search - " + req.query);

    let videos = data.getVideos('tutorials', req.query.search);

    res.status(200).json(videos)
})

app.get('/video', (req, res) => {
    console.log(req.query);

    let video = data.getVideo(req.query.id);

    res.status(200).json(video)
})

// Aaron APIs
app.get('/attackers', (req, res) => {
    console.log("Aaron: Requested attackers");

    let players = data.getSoccerPlayers('attackers');

    res.status(200).json(players);
})

app.get('/defenders', (req, res) => {
    console.log("Aaron: Requested defenders");

    let players = data.getSoccerPlayers('defenders');

    res.status(200).json(players);
})

app.get('/goalkeepers', (req, res) => {
    console.log("Aaron: Requested goalkeepers");

    let players = data.getSoccerPlayers('goalkeepers');

    res.status(200).json(players);
})

app.get('/midfielders', (req, res) => {
    console.log("Aaron: Requested midfielders");

    let players = data.getSoccerPlayers('midfielders');

    res.status(200).json(players);
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})