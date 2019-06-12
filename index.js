const express = require('express');
const app = express();
const PORT = 8081;
const socket = require('socket.io')(8082);

socket.on('connection', con => {
    con.emit('video-queue', ['udCuNsweGc0', 'RkkdYdWMfQ0']);
});

// app.get('/', (req, res) => res.send("hello world!"));
app.use(express.static('public/'));

app.get('/socket.io.js', (req, res) => {
    res.sendFile(`${__dirname}/node_modules/socket.io-client/dist/socket.io.js`);
});

app.listen(PORT, () => {
    console.log('App is running');
});