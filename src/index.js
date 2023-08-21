import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import { disableLoading, enableLoading } from './loader.js';
import { renderCatCard, renderSelectOptions } from './markup-render.js';

const errorText = document.querySelector('.error');
const select = document.querySelector('.breed-select');
const catInfoBlock = document.querySelector('.cat-info');

select.addEventListener('change', onBreedSelect);

// new SlimSelect({
//   select: 'select',
//   select: '#single',
//   settings: {
//     allowDeselect: true,
//   },
// });

errorText.classList.add('is-hidden');

fetchBreeds()
  .then(renderSelectOptions)
  .catch(error => {
    if (error) {
      catInfoBlock.classList.add('is-hidden');
      disableLoading();
      Notify.failure('Oops! Something went wrong! Try reloading the page!', {
        width: '400px',
        borderRadius: '10px',
        position: 'center-center',
      });
    }
  });

function onBreedSelect(event) {
  event.preventDefault();
  enableLoading();
  catInfoBlock.classList.add('is-hidden');
  const breedId = select.value;
  fetchCatByBreed(breedId)
    .then(renderCatCard)
    .catch(error => {
      if (error) {
        catInfoBlock.classList.add('is-hidden');
        disableLoading();
        Notify.failure('Oops! Something went wrong! Try reloading the page!', {
          width: '400px',
          borderRadius: '10px',
          position: 'center-center',
        });
      }
    });
}
