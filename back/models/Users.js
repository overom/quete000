/**
 *  Model Articles
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users", // name of Model
    {
      // fields
      id: { type: DataTypes.INTEGER, primaryKey: true },
      email: { type: DataTypes.STRING, unique: true, notEmpty: true },
      password: { type: DataTypes.STRING },
      name: { type: DataTypes.STRING },
      lasname: { type: DataTypes.STRING }
    },
    {
      timestamps: false
    }
  );

  return Users;
};

module.exports = Users;
