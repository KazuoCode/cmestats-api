/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Names', {
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
    name: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    display: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Names',
    timestamps: false
  });
};
