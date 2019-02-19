module.exports = (sequelize, DataTypes) => {
    const Bottler = sequelize.define('bottler', {
     bottler: {
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
    
    return Bottler;
   }