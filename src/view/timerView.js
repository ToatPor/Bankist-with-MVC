class Timer {
  //need to specify time outside of method if not will always create same value
  _parentElement = document.querySelector('.timer');
  _welcome = document.querySelector('.welcome');
  _app = document.querySelector('.app');
  _time = 300;
  _timer;

  calTime() {
    const minute = String(Math.trunc(this._time / 60)).padStart(2, 0);
    const sec = String(this._time % 60).padStart(2, 0);
    this._parentElement.textContent = `${minute}: ${sec}`;

    if (this._time === 0) {
      clearInterval(this._timer);
      this._welcome.textContent = 'Log in to get started';
      this._app.style.opacity = 0;
    }
    this._time--;
  }

  calRepete() {
    this._timer = setInterval(this.calTime.bind(this), 1000);
  }

  checkTimer() {
    this._time = 300;
    if (this._timer) clearInterval(this._timer);
  }
}
export default new Timer();
