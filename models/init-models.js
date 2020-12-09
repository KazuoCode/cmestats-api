var DataTypes = require("sequelize").DataTypes;
var _Intimacy = require("./Intimacy");
var _Names = require("./Names");
var _Player = require("./Player");
var _Power = require("./Power");

function initModels(sequelize) {
  var Intimacy = _Intimacy(sequelize, DataTypes);
  var Names = _Names(sequelize, DataTypes);
  var Player = _Player(sequelize, DataTypes);
  var Power = _Power(sequelize, DataTypes);

  Names.belongsTo(Player, { foreignKey: "player"});
  Player.hasMany(Names, { foreignKey: "player"});
  Power.belongsTo(Player, { foreignKey: "player"});
  Intimacy.belongsTo(Player, { foreignKey: "player"});
  Player.hasMany(Power, { foreignKey: "player"});
  Player.hasMany(Intimacy, { foreignKey: "player"});

  return {
    Intimacy,
    Names,
    Player,
    Power,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
