var Users = require('./users.json');

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

module.exports = {getUser};