export default (database, DataTypes) => {
  const imdb = database.define(
    'imdb',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      movie_actors: {
        type: DataTypes.STRING
      },
      movie_financials: {
        type: DataTypes.STRING
      },
      movie_IMDB_ratings: {
        type: DataTypes.DECIMAL
      },
      movie_content: {
        type: DataTypes.STRING
      },
      movie_technicals: {
        type: DataTypes.STRING
      },
      movie_facebook_likes: {
        type: DataTypes.DECIMAL
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return imdb;
};
