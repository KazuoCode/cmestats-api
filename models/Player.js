/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Player', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      unique: true
    },
    server: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Player',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Player_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
