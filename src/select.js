const select = document.querySelector('.breed-select');

export function hideSelect() {
  select.classList.add('is-hidden');
}

export function showSelect() {
  select.classList.remove('is-hidden');
}
