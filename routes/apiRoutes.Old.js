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

router.get('/movie', async (req, res) => {
    try {
      res.json({message: 'Successfully touched movie'});
      const movies = await db.inst377_imdb.findAll();
      const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

router.route('/movie_actors')
  .get(async (req, res) => {
    try {
      const actors = await db.MovieActors.findAll();
      // res.json({message: 'Successfully touched movie actors'});
      res.json(actors);
      // console.log('Connection has been established successfully.');
    } catch (err) {
      console.error(err);
      res.json({message: 'Something went wrong'});
    }
    const actors = await db.inst377_imdb.findAll();
    const reply = techs.length > 0 ? { data: actors } : { message: 'no results found' };
    res.json(reply);
  });
  // 
  router.route('/movie_actors/:movie_id')
  .get(async (req, res) => {
    try {
      const actors = await db.MovieActors.findAll({
        where: {
          movie_id: req.params.movie_id
        }
      });
      res.json(actors);


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
router.route('/movie_content')
  .get(async (req, res) => {
    try {
      res.json({message: 'Successfully touched movie content'});
      // await sequelize.authenticate();
      // console.log('Connection has been established successfully.');
    } catch (err) {
      console.error(err);
      res.json({message: 'Server error'});
    }
    const content = await db.inst377_imdb.findAll();
    const reply = content.length > 0 ? { data: content } : { message: 'no results found' };
    res.json(reply);
  });

router.route('/movie_technicals')
  .get(async (req, res) => {
    try {
      res.json({message: 'Successfully touched movie technicals'});
      // await sequelize.authenticate();
      // console.log('Connection has been established successfully.');
      const techs = await db.inst377_imdb.findAll();
      const reply = techs.length > 0 ? { data: techs } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

// getting individual elemement

router.route('/movie_actors/:movie_id')
  .get(async (req, res) => {
    try {
      const actors = await db.MovieActors.findAll({
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


// add, update, delete movie actors record

app.route('/movie_actors')
  .post(function(req, res) {
    res.send('Get a random actor');
  })
  .put(function(req, res) {
    res.send('update actor name');
  })
  .delete(function(req, res) {
    res.send('delete the actor');
  });

router.get('/custom', async (req, res) => {
    try {
      res.json({message: 'Successfully touched custom'});
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

// adding movieModel to apiRoutes

router.get('/Movies/:movie_id', async (req, res) => {
  try {
    const Movies = await db.inst377_imdb.findAll({
      where: {
        movie_id: req.params.movie_id
      }
    });
    res.json(Movies);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/Movies', async (req, res) => {
  try {
    await db.inst377_imdb.update(
      {
        movie_title: req.body.movie_title,
        director_name: req.body.director_name,
        title_year: req.body.title_year,
        country: req.body.country
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