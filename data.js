var Users = require('./data/users.json');
var Videos = require('./data/videos.json');

// Aaron
var Attackers = require('./data/aaron/attackers.json');
var Defenders = require('./data/aaron/defenders.json');
var Goalkeepers = require('./data/aaron/goalkeepers.json');
var Midfielders = require('./data/aaron/midfielders.json');

// Natali
var Tutorials = require('./data/natali/videos.json');

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

function getVideos(type, search) {
    var isYoutube = type === 'youtube';

    var videos = Tutorials;

    if (isYoutube) {
        videos = Videos.map(v => getVideoShortData(v));
    }
    
    if (search && search !== 'undefined') {
        search = search.toLowerCase();

        videos = videos.filter(v => v.title.toLowerCase().includes(search) || v.description.toLowerCase().includes(search));
    }

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