import { view } from './view.js';

class Tranfer extends view {
  _parentElement = document.querySelector('.form--transfer');
  _inputUser = document.querySelector('[name="receiver"]');
  _inputNumber = document.querySelector('[name="amount"]');
}

export default new Tranfer();
