export class view {
  _data;

  submitForm(func) {
    this._parentElement.addEventListener('submit', function (event) {
      event.preventDefault();
      const getFormData = [...new FormData(this)];
      const data = Object.fromEntries(getFormData);
      func(data);
    });
  }

  openApp(element = this._parentElement) {
    element.style.opacity = 1;
  }
  closeApp(element = this._parentElement) {
    element.style.opacity = 0;
  }

  renderAmount(data, number) {
    // need to set data first before render something for get in to data or information
    this._data = data;
    this._parentElement.textContent = this._formatNumber(Math.abs(number));
  }

  _clearHtml() {
    this._parentElement.innerHTML = '';
  }

  _formatNumber(number) {
    return new Intl.NumberFormat(this._data.locale, {
      style: 'currency',
      currency: this._data.currency,
    }).format(number);
  }

  _formatDate(date) {
    return new Intl.DateTimeFormat(this._data.locale, {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  }

  clearField() {
    this._inputUser.value = this._inputNumber.value = '';
    this._inputNumber.blur();
  }
}
