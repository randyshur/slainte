module.exports = (sequelize, DataTypes) => {
    const Distiller = sequelize.define('distiller', {
      distiller: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
     },
     address1: {
      type: DataTypes.STRING,
      allowNull: true
     },
     address2: {
      type: DataTypes.STRING,
      allowNull: true
     },
     city: {
      type: DataTypes.STRING,
      allowNull: true
     },
     state: {
      type: DataTypes.STRING,
      allowNull: true
     },
     postalcode: {
      type: DataTypes.STRING,
      allowNull: true
     },
     country: {
      type: DataTypes.STRING,
      allowNull: true
     },
     region: {
      type: DataTypes.STRING,
      allowNull: true
     },
     latitude: {
      type: DataTypes.STRING,
      allowNull: true
     },
     longitude: {
      type: DataTypes.STRING,
      allowNull: true
     },
     owner: {
      type: DataTypes.STRING,
      allowNull: true
     },
     operational: {
      type: DataTypes.BOOLEAN,
      allowNull: true
     },
     founded: {
      type: DataTypes.INTEGER,
      allowNull: true
     },
     website: {
      type: DataTypes.STRING,
      allowNull: true
     },
     photo: {
      type: DataTypes.STRING,
      allowNull: true
     },
     still_qty: {
      type: DataTypes.INTEGER,
      allowNull: true
     },
     still_cap: {
      type: DataTypes.STRING,
      allowNull: true
     },
     fermenter_qty: {
      type: DataTypes.INTEGER,
      allowNull: true
     },
     fermenter_cap: {
      type: DataTypes.STRING,
      allowNull: true
     },
     mashtun: {
      type: DataTypes.INTEGER,
      allowNull: true
     },
     description: {
      type: DataTypes.TEXT,
      allowNull: true
     },
     active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
       },
    })
    
    return Distiller;
   }