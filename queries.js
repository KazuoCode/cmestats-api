const Sequelize = require("sequelize");

let sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./test.db"
});

const {Player, Names, Power} = require("./models/init-models").initModels(sequelize);

async function getLatestPowerDate() {
    return await Power.findOne({order: [["date", "DESC"]]});
}

async function getAllServerNames() {
    let data = await Player.findAll({
        attributes: ["server"],
        group: [["server", "DESC"]]
    });

    return data.map(x => x.getDataValue("server"));
}

async function getServerPower(name) {
    let date = await getLatestPowerDate();
    let data = await Power.findAll({
        include: ["Player"],
        where: {
            date: date.getDataValue("date"),
        }
    });

    let total = 0;

    data.filter(x => {
        let val = x.getDataValue("Player").getDataValue("server");
        if (val === name) return x;
    }).forEach(entry => {
        total += entry.getDataValue("power");
    });

    return total;
}

async function getPlayerDisplayName(id) {
    let data = await Names.findOne({
        where: {
            display: true,
            player: id
        }
    })
    return data.getDataValue("name");
}

async function getAllServersTotalPower() {
        const servers = await getAllServerNames();
        let result = {}

        for await (const server of servers) {
            result[server] = await getServerPower(server);
        }

        return result;
}

async function getStrongestServer() {
    let data = await getAllServersTotalPower();
    let name = Object.keys(data).reduce((a, b) => data[a] > data[b] ? a : b);
    let res = {};
    res[name] = data[name];

    return res;

}

async function getServerTopByPower(date) {
    let powerRank = await Power.findAll({
        where: {
            "date": date.getDataValue("date")
        },
        order: [["power", "DESC"]]
    });

    let res = {}
    let counter = 1;
    for(const player of powerRank) {
        res[counter] = {
            name: await getPlayerDisplayName(player.getDataValue("player")),
            power: player.getDataValue("power")
        }
        counter++;
    }

    return res;
}

async function getCurrentServerTopByPower() {
    let date = await getLatestPowerDate();
    let data = await getServerTopByPower(date);
    return data;
}

module.exports = {
    getAllServerNames,
    getAllServersTotalPower,
    getServerPower,
    getStrongestServer,
    getCurrentServerTopByPower,
    getServerTopByPower
}
