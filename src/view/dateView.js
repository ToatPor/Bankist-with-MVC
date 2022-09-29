import { view } from './view.js';

class Dates extends view {
  _parentElement = document.querySelector('.date');

  renderDateNow(data) {
    this._data = data;
    this._parentElement.textContent = this._formatDate(Date.now());
  }
}

export default new Dates();
