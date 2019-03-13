const API_TOKEN = 'ae711a3df796b54c9556a94f8f7dce36'

export function getinfo (text) {
  const url = 'http://localhost:3000/tasks'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getFilmsPoster (text) {
  return 'https://image.tmdb.org/t/p/w300' + text
}

export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
