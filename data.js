var Users = require('./users.json');
var Videos = require('./videos.json');

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

module.exports = {
    getUser,
    getVideo,
    getVideos
};