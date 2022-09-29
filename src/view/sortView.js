class Sort {
  _parentElement = document.querySelector('.btn--sort');

  addHandlerSort(func) {
    this._parentElement.addEventListener('click', func);
  }
}

export default new Sort();
