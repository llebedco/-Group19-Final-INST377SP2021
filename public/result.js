let type = 0;
  function showMovie(movie){
    console.log(movie)
    const movieDiv = document.querySelector('#movie_title');
    movieDiv.innerHTML = ''
    movie.forEach((movie) => {
    let tit = location.href.split('=')[1].replace(' ','').toLowerCase()
    if(type == 1) {
        tit = document.querySelector('#search').value;
    }
    console.log(tit)
      if(movie.movie_title.toLowerCase().indexOf(tit) >=0 ) {
        const movieElement = document.createElement('tr');
       
        movieElement.innerHTML = `<td>${movie.movie_title}</td> <td>${movie.director_name}</td> <td>${movie.title_year}</td> <td> ${movie.country}</td>`;
        movieDiv.appendChild(movieElement);
      }
      
    });
  };
  function getTitle() {
    

      fetch('/api/movies').then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data)
        showMovie(data.data)
      }).catch(function(e) {
        console.log("Oops, error");
      });
    
  
  
  }
  getTitle()
  const search = document.querySelector('#search');
  search.onkeyup = function() {
      type = 1;
      getTitle()
  }
  
 