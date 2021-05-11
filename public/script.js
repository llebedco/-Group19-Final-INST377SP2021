// async function getActor() {
//   const request = await fetch('/api');
//   const actorsData = await request.json();
//   return actorsData;
// }

// async function windowActions() {
//   const results = await getActor();
//   const a = results.data;
// } window.onload = windowActions;

async function getMovie() {
  const request = await fetch('/api');
  const moviesData = await request.json();
  return moviesData;
}

async function windowActions() {
  const result = await getMovie();
  const m = result.data;
} window.onload = windowActions;

async function getFinance() {
  const request = await fetch('/api');
  const financeData = await request.json();
  return financeData;
}

async function windowActions() {
  const result = await getFinance();
  const f = results.data;
} window.onload = windowActions;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function getMovies() {
  const request = await fetch('/api/getBudget');
  const moviesData = await request.json();
  return moviesData;
}

async function windowActions() {
  const results = await getMovies();
  const movies = results.data;

  const movieArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectedMovies = movieArray.map((element) => {
    const random = getRandomIntInclusive(0, movies.length - 1);
    return movies[random];
  });

  console.table(selectedMovies);
  const info = document.querySelector('.target');
  selectedMovies.forEach((element) => {
    const rows = document.createElement('tr');
    rows.innerHTML = `
      <td>${element.movie_title}</td>
      <td>${element.budget}</td>
      <td>${element.gross}</td>`;
    info.append(rows);
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Highest Grossing Movies'
      },
      axisX: {
        valueFormatString: ''
      },
      axisY: {
        prefix: ''
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: 'pointer',
        itemclick: toggleDataSeries
      },
      data: [{
        type: 'stackedBar',
        name: 'Gross',
        showLegend: 'true',
        xValueFormatString: '',
        yValueFormatString: '',
        dataPoints: [
          { label: selectedMovies[0].movie_title, y: selectedMovies[0].gross },
          { label: selectedMovies[1].movie_title, y: selectedMovies[1].gross },
          { label: selectedMovies[2].movie_title, y: selectedMovies[2].gross },
          { label: selectedMovies[3].movie_title, y: selectedMovies[3].gross },
          { label: selectedMovies[4].movie_title, y: selectedMovies[4].gross },
          { label: selectedMovies[5].movie_title, y: selectedMovies[5].gross },
          { label: selectedMovies[6].movie_title, y: selectedMovies[6].gross },
          { label: selectedMovies[7].movie_title, y: selectedMovies[7].gross },
          { label: selectedMovies[8].movie_title, y: selectedMovies[8].gross },
          { label: selectedMovies[9].movie_title, y: selectedMovies[9].gross }
        ]
      }, {
        type: 'stackedBar',
        name: 'Budget',
        showLegend: 'true',
        xValueFormatString: '',
        yValueFormatString: '',
        dataPoints: [
          { label: selectedMovies[0].movie_title, y: selectedMovies[0].budget },
          { label: selectedMovies[1].movie_title, y: selectedMovies[1].budget },
          { label: selectedMovies[2].movie_title, y: selectedMovies[2].budget },
          { label: selectedMovies[3].movie_title, y: selectedMovies[3].budget },
          { label: selectedMovies[4].movie_title, y: selectedMovies[4].budget },
          { label: selectedMovies[5].movie_title, y: selectedMovies[5].budget },
          { label: selectedMovies[6].movie_title, y: selectedMovies[6].budget },
          { label: selectedMovies[7].movie_title, y: selectedMovies[7].budget },
          { label: selectedMovies[8].movie_title, y: selectedMovies[8].budget },
          { label: selectedMovies[9].movie_title, y: selectedMovies[9].budget }
        ]
      }
      ]
    });

    chart.render();
    function toggleDataSeries(e) {
      if (typeof (e.dataSeries.visible) === 'undefined' || e.DataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      chart.render();
    }
  });
  return selectedMovies;
}

window.onload = windowActions;