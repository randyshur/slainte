module.exports = (sequelize, DataTypes) => {
    const Grain = sequelize.define('grain', {
     grain: {
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
    
    return Grain;
   }