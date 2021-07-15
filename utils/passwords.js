const passwords = {
    'test': 'test12',
    'admin': 'admin1234'
}

const checkPassword = (u, p) => {
    return !!(passwords[u] && passwords[u] === p)
}

module.exports = {
    checkPassword
}