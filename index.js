const express = require('express');
const path = require('path');
const { checkPassword } = require('./utils/passwords');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/api/login', (req, res) => {
    let { username, password } = req.body;
    if(!username || !password) {
        username = req.query.username;
        password = req.query.password;
    }
    const isValid = checkPassword(username, password);
    if(isValid) {
        return res.status(200).send('Success');
    }
    return res.send('Failure');
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(4500, () => console.log('Listening on port 4500'));