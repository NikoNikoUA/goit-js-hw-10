import axios from 'axios';

const API_KEY =
  'live_V6WakLVeDUYuV0CwG8EQT8MgErA5ezIVaBC7k1nytUEerMjpIg4x0JA7QTVc2Ymn';

axios.defaults.headers.common['x-api-key'] = API_KEY;

const options = {
  headers: {
    'x-api-key': API_KEY,
  },
};

const select = document.querySelector('.breed-select');
const loadingText = document.querySelector('.loader');
const catInfoBlock = document.querySelector('.cat-info');

export function fetchBreeds() {
  hideSelect();
  const url = 'https://api.thecatapi.com/v1/breeds';
  return fetch(url, options).then(response => {
    return response.json();
  });
}

export function renderSelectOptions(cat) {
  cat.map(({ id, name }) => {
    const markup = `<option value="${id}">${name}</option>`;
    select.insertAdjacentHTML('beforeend', markup);
  });
  showSelect();
  disableLoading();
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, options).then(response => {
    return response.json();
  });
}

export function renderCatCard(breeds) {
  const breedInfo = breeds[0].breeds[0];
  console.log(breedInfo);
  const catCard = breeds
    .map(breed => {
      return `<div class="image">
  <img src="${breed.url}", alt="${breedInfo.name}" width="500">
  </div>
  <div class="description">
  <h2>${breedInfo.name}</h2>
  <p>${breedInfo.description}</p>
  <p><b>Temperament:<b/>${breedInfo.temperament}</p>
</div>
`;
    })
    .join('');

  catInfoBlock.innerHTML = catCard;
  disableLoading();
}

export function disableLoading() {
  loadingText.classList.add('is-hidden');
}

export function enableLoading() {
  loadingText.classList.remove('is-hidden');
}

function hideSelect() {
  select.classList.add('is-hidden');
}

function showSelect() {
  select.classList.remove('is-hidden');
}
