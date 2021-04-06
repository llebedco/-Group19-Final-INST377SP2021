import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the IMDB API!');
});

//getting all database records

router.get('movie_id', async (req, res) => {
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
  router.get('movie_financials', async (req, res) => {
    try {
      const financials = await db.inst377_imdb.findAll();
      const reply = financials.length > 0 ? { data: financials } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

  router.get('movie_IMDB_ratings', async (req, res) => {
    try {
      const ratings = await db.inst377_imdb.findAll();
      const reply = ratings.length > 0 ? { data: ratings } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });
  router.get('movie_facebook_likes', async (req, res) => {
    try {
      const fb_likes = await db.inst377_imdb.findAll();
      const reply = fb_likes.length > 0 ? { data: fb_likes } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });
  router.get('movie_content', async (req, res) => {
    try {
      const content = await db.inst377_imdb.findAll();
      const reply = content.length > 0 ? { data: content } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });
  router.get('movie_technicals', async (req, res) => {
    try {
      const techs = await db.inst377_imdb.findAll();
      const reply = techs.length > 0 ? { data: techs } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });
//getting individual elemement 

  router.get('api/movie_id/3', (req, response) => {
    try {
        const movie = await db.inst377_imdb.findAll({
            where: {
                movie_id: req_params.movie_id
        }
    });
    res.json(movie);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

        
  
  
  

  
  