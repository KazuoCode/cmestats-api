/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Intimacy', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      unique: true
    },
    player: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    intimacy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Intimacy',
    timestamps: false
  });
};
