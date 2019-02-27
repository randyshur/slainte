module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
     firstName: {
      type: DataTypes.STRING,
      allowNull: false
     },
     lastName: {
      type: DataTypes.STRING,
      allowNull: false 
     },
     email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true 
     },
     password: {
      type: DataTypes.STRING,
      allowNull: false 
     },
     subscribed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
     },
     proprequest: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
     },
     proprietor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
       },
       active: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: true
        },
    })
    
    return User;
   }