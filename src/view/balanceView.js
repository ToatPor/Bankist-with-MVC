import { view } from './view.js';

class Balance extends view {
  _parentElement = document.querySelector('.balance__value');
}

export default new Balance();
