export default (sequelize, DataTypes) => {
  const MovieContent = sequelize.define(
    'movie_content',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      genres: {
        type: DataTypes.STRING
      },
      plot_keywords: {
        type: DataTypes.STRING
      },
      content_rating: {
        type: DataTypes.STRING
      },
      language: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return MovieContent;
};