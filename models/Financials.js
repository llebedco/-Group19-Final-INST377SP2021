export default (sequelize, DataTypes) => {
  const Financials = sequelize.define(
    'movie_financials',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      budget: {
        type: DataTypes.STRING
      },
      gross: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Financials;
};