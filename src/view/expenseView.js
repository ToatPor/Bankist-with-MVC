import { view } from './view.js';
class Expense extends view {
  _parentElement = document.querySelector('.summary__value--out');
}

export default new Expense();
