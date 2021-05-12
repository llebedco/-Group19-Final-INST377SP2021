# Movie Metadata
## Description
The information problem we are hoping to solve is the question of which movies are the most economically successful based on their box office earnings accumulated from their screening cycles. 

## Link to Website
https://group19-final-inst377.herokuapp.com/
 
## Target Browsers
* Windows 10
* iOS

## Links
* [Developer Manual](https://github.com/llebedco/-Group19-Final-INST377SP2021#developer-manual)
* [User Manual](https://group19-final-inst377.herokuapp.com/documentation.html)

# Developer Manual

## How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. Type `npm install`   into terminal window and run.
4. The application should now be set to use.

## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run `npm start`. There should be no errors.
3. In a web browser, go to url: `http://localhost:3000/`.

## To run tests for software
The are no prewritten tests in the source repository, but you can use Cypress to run your own written tests.

1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run `npm start`.
3. In the second terminal run `npm test`.

## Server application APIs
/api - API route for Movie data

* GET - logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains movie id from request body to fetch url. fetch data json from Movie Metadata API and returns JSON response.
* PUT - returns response 'Got a PUT request at /api'.

## Known Bugs and Future Development
# Bugs:
* There may be null values in the movie and movie_financials data. 

## Future Development:
* Handle null values in movie and movie_financials data.
* Adding more ways to filter movies based on ratings, actor, and movie content.
* Adding a way to find information on what kind of movie genre consistently provides the best returns, based on the top genre of a given year.
