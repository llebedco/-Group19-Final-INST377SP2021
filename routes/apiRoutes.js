/* eslint-disable camelcase */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the IMDB API!');
});

/// /////////////////////////////////
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

router.post("/movie", async (req, res) => {
  console.info("Post request to /movie", req.body);
  const movies = await db.Movies.findAll();
  const currentId = (await movies.length) + 1;
  try {
    const newMovie = await db.Movies.create({
      movie_id: currentId,
      movie_title: req.body.mTitle,
      director_name: req.body.mDirector,
      title_year: req.body.mYear,
      country: req.body.mCountry
    });
    res.json(newMovie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie/:movie_id', async (req, res) => {
  try {
    const movie = await db.Movies.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/getBudget').get(async (req, res) => {
  try {
    const movies = await db.Movies.findAll();
    // console.log('movies length:', movies.length);
    const macros = await db.Financials.findAll();
    const getBudgets = movies.map((movie_title) => {
      const macroEntry = macros.find(
        (macro) => macro.movie_id === movie_title.movie_id
      );
      // console.log('values:', macroEntry.dataValues);
      if (macroEntry) {
        return {
          ...movie_title.dataValues,
          ...macroEntry.dataValues
        };
      }
    });
    console.log('-- getBudgets:', getBudgets);
    res.json({ data: getBudgets });
  } catch (err) {
    console.error(err);
    res.json({ message: 'Something went wrong' });
  }
});

/// /////////////////////////////////
/// ////////Macros Endpoints/////////
/// /////////////////////////////////
router.get('/macros', async (req, res) => {
  try {
    const macros = await db.Financials.findAll();
    res.send(macros);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route("/actors").get(async (req, res) => {
  try {
    const actors = await db.Actors.findAll({});
    const reply = actors.length > 0 ? { data: actors } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.json({ message: 'Something went wrong' });
  }
});

router.route('/actors/:movie_id').get(async (req, res) => {
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
    const reply = financials.length > 0
      ? { data: financials }
      : { message: 'no results found' };
    console.log(reply, 'reply');
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/financials/:movie_id').get(async (req, res) => {
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

router.route('/ratings').get(async (req, res) => {
  try {
    const ratings = await db.Ratings.findAll({});
    const reply = ratings.length > 0 ? { data: ratings } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.json({ message: 'Something went wrong' });
  }
});

router.route('/ratings/:movie_id').get(async (req, res) => {
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
    const reply = movie_facebook_likes.length > 0
      ? { data: movie_facebook_likes }
      : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/movie_facebook_likes/:movie_id').get(async (req, res) => {
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
    const reply = movie_content.length > 0
      ? { data: movie_content }
      : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.route('/movie_content/:movie_id').get(async (req, res) => {
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

router.route('/technicals').get(async (req, res) => {
  try {
    const technicals = await db.Technicals.findAll({});
    const reply = technicals.length > 0
      ? { data: technicals }
      : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.json({ message: 'Something went wrong' });
  }
});

router.route('/technicals/:movie_id').get(async (req, res) => {
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

router.route("/movies").get(async (req, res) => {
  try {
    const movies = await db.Movies.findAll({});
    const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.json({ message: 'Something went wrong' });
  }
});

router.route('/movies/:movie_id').get(async (req, res) => {
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
