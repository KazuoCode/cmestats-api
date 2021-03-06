/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Power', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    player: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Player',
        key: 'id'
      }
    },
    power: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Power',
    timestamps: false
  });
};
