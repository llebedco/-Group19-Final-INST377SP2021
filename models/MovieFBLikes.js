  export default (sequelize, DataTypes) => {
    const Movies = sequelize.define(
      'movie_facebook_likes',
      {
        movie_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        director_facebook_likes: {
          type: DataTypes.INTEGER
        },
        actor_1_facebook_likes: {
          type: DataTypes.INTEGER
        },
        actor_2_facebook_likes: {
          type: DataTypes.INTEGER
        },
        actor_3_facebook_likes: {
          type: DataTypes.INTEGER
        },
        movie_facebook_likes: {
          type: DataTypes.INTEGER
        },
        cast_total_facebook_likes: {
          type: DataTypes.INTEGER
        },
  
      },
      { freezeTableName: true, timestamps: false }
    );
    return Movies;
  };
