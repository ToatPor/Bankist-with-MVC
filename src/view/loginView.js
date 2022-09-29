import { view } from './view.js';

class LoginView extends view {
  _parentElement = document.querySelector('.login');
  _inputUser = document.querySelector('.login__input--user');
  _inputNumber = document.querySelector('.login__input--pin');

  addHandlerWindow(func) {
    window.addEventListener('load', func);
  }
}

export default new LoginView();
