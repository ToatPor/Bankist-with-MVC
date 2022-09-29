import { view } from './view.js';

class App extends view {
  _parentElement = document.querySelector('.app');
}

export default new App();
