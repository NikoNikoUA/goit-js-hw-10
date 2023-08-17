import axios from 'axios';
import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
import { renderSelectOptions } from './cat-api.js';
import { renderCatCard } from './cat-api.js';

axios.defaults.headers.common['x-api-key'] =
  'live_V6WakLVeDUYuV0CwG8EQT8MgErA5ezIVaBC7k1nytUEerMjpIg4x0JA7QTVc2Ymn';

const loadingText = document.querySelector('.loader');
const errorText = document.querySelector('.error');
const select = document.querySelector('.breed-select');

select.addEventListener('change', onBreedSelect);

fetchBreeds()
  .then(renderSelectOptions)
  .catch(error => {
    error;
  });

function onBreedSelect() {
  const breedId = select.value;
  fetchCatByBreed(breedId)
    .then(renderCatCard)
    .catch(error => {
      error;
    });
}
