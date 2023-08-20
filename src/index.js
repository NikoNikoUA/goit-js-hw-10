import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  fetchBreeds,
  fetchCatByBreed,
  renderSelectOptions,
  renderCatCard,
  disableLoading,
  enableLoading,
} from './cat-api.js';

axios.defaults.headers.common['x-api-key'] =
  'live_V6WakLVeDUYuV0CwG8EQT8MgErA5ezIVaBC7k1nytUEerMjpIg4x0JA7QTVc2Ymn';

const errorText = document.querySelector('.error');
const select = document.querySelector('.breed-select');

select.addEventListener('change', onBreedSelect);

errorText.classList.add('is-hidden');

fetchBreeds()
  .then(renderSelectOptions)
  .catch(error => {
    if (error) {
      disableLoading();
      Notify.failure('Oops! Something went wrong! Try reloading the page!', {
        width: '400px',
        borderRadius: '10px',
        position: 'center-center',
      });
    }
  });

function onBreedSelect() {
  enableLoading();
  const breedId = select.value;
  fetchCatByBreed(breedId)
    .then(renderCatCard)
    .catch(error => {
      if (error) {
        disableLoading();
        Notify.failure('Oops! Something went wrong! Try reloading the page!', {
          width: '400px',
          borderRadius: '10px',
          position: 'center-center',
        });
      }
    });
}
