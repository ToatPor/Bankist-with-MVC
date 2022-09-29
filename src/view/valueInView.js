import { view } from './view.js';

class Income extends view {
  _parentElement = document.querySelector('.summary__value--in');
}

export default new Income();
