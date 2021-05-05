/* eslint-disable camelcase */
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the IMDB API!');
});

/// /////////////////////////////////
/// ////Dining Hall Endpoints////////
/// /////////////////////////////////
// router.get('/dining', async (req, res) => {
// try {
//   const halls = await db.DiningHall.findAll();
//   const reply = halls.length > 0 ? { data: halls } : { message: 'no results found' };
//   res.json(reply);
// } catch (err) {
//   console.error(err);
//   res.error('Server error');
// }
// });

// router.get('/dining/:hall_id', async (req, res) => {
//   try {
//     const hall = await db.DiningHall.findAll({
//       where: {
//         hall_id: req.params.hall_id
//       }
//     });

//     res.json(hall);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

router.post('/dining', async (req, res) => {
  const halls = await db.DiningHall.findAll();
  const currentId = (await halls.length) + 1;
  try {
    const newDining = await db.DiningHall.create({
      hall_id: currentId,
      hall_name: req.body.hall_name,
      hall_address: req.body.hall_address,
      hall_lat: req.body.hall_lat,
      hall_long: req.body.hall_long
    });
    res.json(newDining);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// router.delete('/dining/:hall_id', async (req, res) => {
//   try {
//     await db.DiningHall.destroy({
//       where: {
//         hall_id: req.params.hall_id
//       }
//     });
//     res.send('Successfully Deleted');
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// router.put('/dining', async (req, res) => {
//   try {
//     await db.DiningHall.update(
//       {
//         hall_name: req.body.hall_name,
//         hall_location: req.body.hall_location
//       },
//       {
//         where: {
//           hall_id: req.body.hall_id
//         }
//       }
//     );
//     res.send('Successfully Updated');
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });///
/// ////////Movie Endpoints//////////
/// /////////////////////////////////
router.get('/movie', async (req, res) => {
  try {
    const movies = await db.Movies.findAll();
    const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/movie', async (req, res) => {
  const movies = await db.Movies.findAll();
  const currentId = (await movies.length) + 1;
  try {
    const newMovie = await db.Movies.create({
      movie_id: currentId,
      movie_title: req.body.movie_title,
      director_name: req.body.director_name,
      title_year: req.body.title_year,
      country: req.body.country
    });
    res.json(newMovie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie/:meal_id', async (req, res) => {
  try {
    const movie = await db.Movie.findAll({
      where: {
        meal_id: req.params.meal_id
      }
    });
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/movie', async (req, res) => {
  try {
    await db.Movies.update(
      {
        movie_title: req.body.movie_title,
        gross: req.body.gross
      },
      {
        where: {
          movie_id: req.body.movie_id
        }
      }
    );
    res.send('Movie Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Macros Endpoints/////////
/// /////////////////////////////////
router.get('/macros', async (req, res) => {
  try {
    const macros = await db.Macros.findAll();
    res.send(macros);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/macros/:movie_id', async (req, res) => {
  try {
    const movies = await db.Macros.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/macros', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.Macros.update(
      {
        movie_title: req.body.movie_title,
        budget: req.body.budget,
        gross: req.body.gross
      },
      {
        where: {
          movie_id: req.body.movie_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// Dietary Restrictions Endpoints///
/// /////////////////////////////////
router.get('/restrictions', async (req, res) => {
  try {
    const restrictions = await db.DietaryRestrictions.findAll();
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/restrictions/:restriction_id', async (req, res) => {
  try {
    const restrictions = await db.DietaryRestrictions.findAll({
      where: {
        restriction_id: req.params.restriction_id
      }
    });
    res.json(restrictions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////
const macrosCustom = 'SELECT `INST377_imdb`.`movie`.`movie_id` AS `movie_id`,`INST377_imdb`.`movie`.`movie_title` AS `movie_title`,`INST377_imdb `.`Macros`.`budget` AS `budget`,`INST377_imdb`.`Macros`.`gross` AS `gross`, FROM(`INST377_imdb`.`movie`JOIN `INST377_imdb`.`Macros`)WHERE(`INST377_imdb`.`movie`.`movie_id` = `INST377_imdb`.`Macros`.`movie_id`)';
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const mealMapCustom = `SELECT _name,
  hall_address,
  hall_lat,
  hall_long,
  meal_name
FROM
  movie m
INNER JOIN movie_Locations ml 
  ON m.meal_id = ml.meal_id
INNER JOIN Dining_Hall d
ON d.hall_id = ml.hall_id;`;
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// inst377_imdb database//
// getting all database records
router.get('/movie_id', async (req, res) => {
  try {
    res.json({message: 'Successfully touched movie'});
    const movies = await db.Movies.findAll();
    const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/movieGrossing')
  .get(async (req, res) => {
    try {
      const movies = await db.Movies.findAll();
      const macros = await db.Macros.findAll();
      const grossing = movies.map((movie) => {
        const macroEntry = macros.find((macro) => macro.movie_id === movie.movie_id);
        console.log('movie', movie);
        console.log('macroEntry', macroEntry);
        return {
          ...movie.dataValues,
          ...macroEntry.dataValues
        };
      });
      res.json({data: movieGrossing});
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong'});
    }
  });

router.route('/actors')
  .get(async (req, res) => {
    try {
      const actors = await db.Actors.findAll({
      });
      const reply = actors.length > 0 ? { data: actors } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong'});
    }
  });

router.route('/actors/:movie_id')
  .get(async (req, res) => {
    try {
      const actors = await db.Actors.findAll({
        where: {
          movie_id: req.params.movie_id
        }
      });
      res.json(actors);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

router.get('/financials', async (req, res) => {
  try {
    const financials = await db.Financials.findAll();
    const reply = financials.length > 0 ? { data: financials } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/financials/:movie_id')
  .get(async (req, res) => {
    try {
      const financials = await db.Financials.findAll({
        where: {
          movie_id: req.params.movie_id
        }
      });
      res.json(financials);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

router.route('/ratings')
  .get(async (req, res) => {
    try {
      const ratings = await db.Ratings.findAll({
      });
      const reply = ratings.length > 0 ? { data: ratings } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong'});
    }
  });

router.route('/ratings/:movie_id')
  .get(async (req, res) => {
    try {
      const ratings = await db.Ratings.findAll({
        where: {
          movie_id: req.params.movie_id
        }
      });
      res.json(ratings);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

router.get('/movie_facebook_likes', async (req, res) => {
  try {
    const movie_facebook_likes = await db.MovieFBLikes.findAll();
    const reply = movie_facebook_likes.length > 0 ? { data: movie_facebook_likes } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/movie_facebook_likes/:movie_id')
  .get(async (req, res) => {
    try {
      const movie_facebook_likes = await db.MovieFBLikes.findAll({
        where: {
          movie_id: req.params.movie_id
        }
      });
      res.json(movie_facebook_likes);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

router.get('/movie_content', async (req, res) => {
  try {
    const movie_content = await db.MovieContent.findAll();
    const reply = movie_content.length > 0 ? { data: movie_content } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/movie_content/:movie_id')
  .get(async (req, res) => {
    try {
      const content = await db.MovieContent.findAll({
        where: {
          movie_id: req.params.movie_id
        }
      });
      res.json(content);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

router.route('/technicals')
  .get(async (req, res) => {
    try {
      const technicals = await db.Technicals.findAll({
      });
      const reply = technicals.length > 0 ? { data: technicals } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong'});
    }
  });

router.route('/technicals/:movie_id')
  .get(async (req, res) => {
    try {
      const technicals = await db.Technicals.findAll({
        where: {
          movie_id: req.params.movie_id
        }
      });
      res.json(technicals);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

router.get('/custom', async (req, res) => {
  try {
    res.json({message: 'Successfully touched custom'});
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/movies')
  .get(async (req, res) => {
    try {
      const movies = await db.Movies.findAll({
      });
      const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong'});
    }
  });

router.route('/movies/:movie_id')
  .get(async (req, res) => {
    try {
      const movies = await db.Movies.findAll({
        where: {
          movie_id: req.params.movie_id
        }
      });
      res.json(movies);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

export default router;
