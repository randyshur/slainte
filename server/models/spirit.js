module.exports = (sequelize, DataTypes) => {
    const Spirit = sequelize.define('spirit', {
     spirit: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
     },
     distiller_id: {
      type: DataTypes.INTEGER,
      allowNull: false
     },
     type: {
      type: DataTypes.STRING,
      allowNull: false
     },
     proof: {
      type: DataTypes.INTEGER,
      allowNull: false
     },
     cask_strength: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
     },
     volume: {
      type: DataTypes.INTEGER,
      allowNull: false
     },
     bottle_front: {
      type: DataTypes.STRING,
      allowNull: true
     },
     bottle_back: {
      type: DataTypes.STRING,
      allowNull: true
     },
     pkg_front: {
      type: DataTypes.STRING,
      allowNull: true
     },
     pkg_back: {
      type: DataTypes.STRING,
      allowNull: true
     },
     available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
     },
     price: {
      type: DataTypes.DECIMAL,
      allowNull: true
     },
     api_link: {
      type: DataTypes.STRING,
      allowNull: true
     },
     notes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
     },
     description: {
      type: DataTypes.STRING,
      allowNull: true
     },
     randy_rating: {
      type: DataTypes.STRING,
      allowNull: true
     },
     active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
       },
    })
    
    return Spirit;
   }