import { view } from './view.js';

class Interest extends view {
  _parentElement = document.querySelector('.summary__value--interest');

  renderInterest(data) {
    this._parentElement.textContent = `${data}%`;
  }
}

export default new Interest();
