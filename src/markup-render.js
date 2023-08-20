import { disableLoading } from './loader.js';
import { showSelect } from './select.js';

const select = document.querySelector('.breed-select');
const catInfoBlock = document.querySelector('.cat-info');

export function renderSelectOptions(cat) {
  cat.map(({ id, name }) => {
    const markup = `<option value="${id}">${name}</option>`;
    select.insertAdjacentHTML('beforeend', markup);
  });
  showSelect();
  disableLoading();
}

export function renderCatCard(breeds) {
  const breedInfo = breeds[0].breeds[0];
  catInfoBlock.classList.remove('is-hidden');
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
