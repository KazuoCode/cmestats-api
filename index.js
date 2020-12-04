const express = require('express');
const queries = require('./queries');

const app = express();

app.get('/servers/power/total', (req, res) => {
    queries.getStrongestServer().then(data => res.send(data))
});

app.get('/servers/power/top/current', ((req, res) => {
    queries.getCurrentServerTopByPower().then(data => res.send(data));
}))

app.listen(1337, () => {
    console.log("Server open")
});