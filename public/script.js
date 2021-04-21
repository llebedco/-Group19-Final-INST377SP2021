async function getActor() {
  const request = await fetch('/api');
  const actorsData = await request.json();
  return actorsData;
}

async function windowActions() {
  const results = await getActor();
  const a = results.data;
}window.onload = windowActions;

async function getMovie() {
  const request = await fetch('/api');
  const moviesData = await request.json();
  return moviesData;
}

async function windowActions() {
  const result = await getMovie();
  const m = result.data;
}window.onload = windowActions;