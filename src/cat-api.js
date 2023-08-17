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

export function fetchBreeds() {
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
}

const catInfoBlock = document.querySelector('.cat-info');

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, options).then(response => {
    return response.json();
  });
}

export function renderCatCard(breeds) {
  const catCard = breeds
    .map(breed => {
      return `<div>
  <img src="${breed.url}", alt="${breed.name}" width="500">
  </div>
  <div>
  <h2>${breeds.name}</h2>
  <p>${breeds.description}</p>
  <p>${breeds.temperament}</p>
</div>
`;
    })
    .join('');

  catInfoBlock.innerHTML = catCard;
}
