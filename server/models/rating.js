module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('rating', {
     rating: {
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
    
    return Rating;
   }