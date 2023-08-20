const loadingText = document.querySelector('.loader');

export function disableLoading() {
  loadingText.classList.add('is-hidden');
}

export function enableLoading() {
  loadingText.classList.remove('is-hidden');
}
