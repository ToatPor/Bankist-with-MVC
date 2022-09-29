import { view } from './view.js';

class Welcome extends view {
  _parentElement = document.querySelector('.welcome');

  renderWelcome(data) {
    this._data = data;
    this._parentElement.textContent = `Welcome Back ${this._data}`;
  }
}

export default new Welcome();
