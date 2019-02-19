module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define('region', {
     region: {
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
    
    return Region;
   }