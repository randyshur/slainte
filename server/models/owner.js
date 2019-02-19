module.exports = (sequelize, DataTypes) => {
    const Owner = sequelize.define('owner', {
     owner: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
     },
     active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
       },
    })
    
    return Owner;
   }