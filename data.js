var Users = require('./data/users.json');
var Videos = require('./data/videos.json');

// Aaron
var Attackers = require('./data/aaron/attackers.json');
var Defenders = require('./data/aaron/defenders.json');
var Goalkeepers = require('./data/aaron/goalkeepers.json');
var Midfielders = require('./data/aaron/midfielders.json');

function getUser(email, password) {
    if (!email || !password) {
        return {status: 400, message: "Invalid data!"}
    }

    const user = Users.find(u => u.email === email && u.password === password);

    if (user) {
        return {status: 200, user}
    }

    return {status: 400, message: "Invalid user!"}
}

function getVideo(id) {
    if (!id) {
        return {status: 400, message: "Invalid video id!"}
    }

    const video = Videos.find(v => v.id === id);

    if (video) {
        return {status: 200, video}
    }

    return {status: 400, message: "Video not found!"}
}

const getVideoShortData = (video) => ({id: video.id, title: video.title, description: video.description, poster: video.poster});

function getVideos(search) {
    if (!search || search === 'undefined') {
        return {status: 200, videos: Videos.map(v => getVideoShortData(v))}
    }

    search = search.toLowerCase();

    const videos = Videos.filter(v => v.title.toLowerCase().includes(search) || v.description.toLowerCase().includes(search)).map(v => getVideoShortData(v));

    return {status: 200, videos}
}

function getSoccerPlayers(type) {

    if (type === 'attackers') {
        return {status: 200, players: Attackers}
    }

    if (type === 'defenders') {
        return {status: 200, players: Defenders}
    }

    if (type === 'goalkeepers') {
        return {status: 200, players: Goalkeepers}
    }

    if (type === 'midfielders') {
        return {status: 200, players: Midfielders}
    }

    return {status: 400, message: "Soccer players not found!"}
}

module.exports = {
    getUser,
    getVideo,
    getVideos,
    getSoccerPlayers
};