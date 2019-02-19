module.exports = (sequelize, DataTypes) => {
    const Type = sequelize.define('type', {
     name: {
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
    
    return Type;
   }