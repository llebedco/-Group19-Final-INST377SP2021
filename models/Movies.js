export default (sequelize, DataTypes) => {
  const Movies = sequelize.define(
    'movie',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      movie_title: {
        type: DataTypes.STRING
      },
      director_name: {
        type: DataTypes.STRING
      },
      title_year: {
        type: DataTypes.INTEGER
      },
      country: {
        type: DataTypes.STRING
      }

    },
    { freezeTableName: true, timestamps: false }
  );

  return Movies;
};

// async function getTitle() {
//   const repsonse = await fetch('http://localhost:3000/api/Movies')
//     .then((response) => response.json())
//     .then((movie) => showMovie(movie.results));
//   showMovie = (movie) => {
//     const movieDiv = document.querySelector('#movie_title');
//     movie.forEach((movie) => {
//       const movieElement = document.createElement('p');
//       movieElement.innerText = `Title: ${movie_title.name}`;
//       movieDiv.append(movieElement);
//     });
//   };
// }