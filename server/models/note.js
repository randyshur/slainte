module.exports = (sequelize, DataTypes) => {
    const Note = sequelize.define('note', {
     note: {
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
    
    return Note;
   }