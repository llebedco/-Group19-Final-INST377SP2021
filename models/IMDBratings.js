export default (sequelize, DataTypes) => {
    const Ratings = sequelize.define(
      'movie_IMDB_ratings',
      {
        movie_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        imdb_score: {
          type: DataTypes.FLOAT
        },
        num_critic_for_reviews: {
          type: DataTypes.INTEGER
        },
        num_user_for_reviews: {
          type: DataTypes.INTEGER
        },
        num_voted_users: {
            type: DataTypes.INTEGER
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Ratings;
  };