import { view } from './view.js';

class Loan extends view {
  _parentElement = document.querySelector('.form--loan');
}

export default new Loan();
