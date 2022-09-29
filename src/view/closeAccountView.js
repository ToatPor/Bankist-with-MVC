import { view } from './view.js';

class CloseAccount extends view {
  _parentElement = document.querySelector('.form--close');
  _inputUser = document.querySelector('[name="user"]');
  _inputNumber = document.querySelector('[name="pass"]');
}

export default new CloseAccount();
