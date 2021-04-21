async function getActor() {
  const request = await fetch('/api');
  const actorsData = await request.json();
  return actorsData;
}

async function windowActions() {
  const results = await getActor();
  const a = results.data;
}window.onload = windowActions;