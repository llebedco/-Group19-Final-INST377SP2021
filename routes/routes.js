/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable camelcase */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the IMDB API!');
});

// getting all database records

router.get('/movie_id', async (req, res) => {
  try {
    const movies = await db.inst377_imdb.findAll();
    const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('movie_actors', async (req, res) => {
  try {
    const actors = await db.inst377_imdb.findAll();
    const reply = movies.actors > 0 ? { data: actors } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/movie_financials', async (req, res) => {
  try {
    const financials = await db.inst377_imdb.findAll();
    const reply = financials.length > 0 ? { data: financials } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/movie_IMDB_ratings', async (req, res) => {
  try {
    const ratings = await db.inst377_imdb.findAll();
    const reply = ratings.length > 0 ? { data: ratings } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/movie_facebook_likes', async (req, res) => {
  try {
    const fb_likes = await db.inst377_imdb.findAll();
    const reply = fb_likes.length > 0 ? { data: fb_likes } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/movie_content', async (req, res) => {
  try {
    const content = await db.inst377_imdb.findAll();
    const reply = content.length > 0 ? { data: content } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/movie_technicals', async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  const techs = await db.inst377_imdb.findAll();
  const reply = techs.length > 0 ? { data: techs } : { message: 'no results found' };
  res.json(reply);
});
// getting individual elemement

router.get('api/movie_id/3', async (req, res) => {
  try {
    const movie = await db.inst377_imdb.findAll({
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

router.route('/movie_technicals')
  .get(async (req, res) => {
    try {
      res.json({message: 'Successfully touched movie technicals'});

      //  await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong'});
    }
    const techs = await db.inst377_imdb.findAll();
    const reply = techs.length > 0 ? { data: techs } : { message: 'no results found' };
    res.json(reply);
  });
// add, update, delete movie actors record

app.route('/movie_actors')
  // eslint-disable-next-line func-names
  .post(function(req, res) {
    res.send('Get a random actor');
  })
  .put(function(req, res) {
    res.send('update actor name');
  })
  .delete(function(req, res) {
    res.send('delete the actor');
  });