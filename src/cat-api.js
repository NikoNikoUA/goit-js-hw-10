import axios from 'axios';
import { hideSelect } from './select.js';

const API_KEY =
  'live_V6WakLVeDUYuV0CwG8EQT8MgErA5ezIVaBC7k1nytUEerMjpIg4x0JA7QTVc2Ymn';

axios.defaults.headers.common['x-api-key'] = API_KEY;

const options = {
  headers: {
    'x-api-key': API_KEY,
  },
};

export function fetchBreeds() {
  hideSelect();
  const url = 'https://api.thecatapi.com/v1/breeds';
  return fetch(url, options).then(response => {
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, options).then(response => {
    return response.json();
  });
}
