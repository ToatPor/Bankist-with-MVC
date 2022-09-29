import { view } from './view.js';

class Movement extends view {
  _parentElement = document.querySelector('.movements');

  renderMovement(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clearHtml();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
  _culDate(date) {
    const resultDate = Math.round(
      Math.abs(date - new Date() / (1000 * 24 * 60 * 60))
    );
    if (resultDate === 0) return 'Today';
    if (resultDate === 1) return 'Yesterday';
    return this._formatDate(date);
  }
  _generateMarkup() {
    const sort = this._data.sort
      ? //copy array
        this._data.movements.slice().sort((a, b) => a - b)
      : this._data.movements;
    return sort
      .map((data, i) => {
        const type = data > 0 ? 'deposit' : 'withdrawal';
        const createDate = new Date(this._data.movementsDates[i]);
        const formatDate = this._culDate(createDate);
        const formNumber = this._formatNumber(data);
        const markup = `
       <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
          i + 1
        } ${type}t</div>
          <div class="movements__date">${formatDate}</div>
          <div class="movements__value">${formNumber}</div>
        </div>
    `;
        return markup;
      })
      .join('');
  }
}
export default new Movement();
