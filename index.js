const express = require('express');
const queries = require('./queries');

const app = express();

app.get('/servers/power/total', (req, res) => {
    queries.getMostPowerServer().then(data => res.send(data))
});

app.get('/servers/power/top/current', ((req, res) => {
    queries.getCurrentServerTopByPower().then(data => res.send(data));
}))

app.get('/servers/pool/overview', async (req, res) => {
    let data = {
        power: {
            name: '',
            total: 0
        },
        intimacy: {
            name: '',
            total: 0
        },
        growth: {
            name: '',
            number: 0
        }
    };
    let power = await queries.getMostPowerServer();
    data.power.name = Object.keys(power)[0];
    data.power.total = power[data.power.name];


    let intimacy = await queries.getMostIntimacyServer();
    data.intimacy.name = Object.keys(intimacy)[0];
    data.intimacy.total = intimacy[data.intimacy.name]

    res.send(data);
});

app.listen(1337, () => {
    console.log("Server open")
});