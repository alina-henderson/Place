export default class CardsList {
  constructor(selector) {
    this._selector = selector;
  }
  _getTemplate() {
    return document.querySelector(this._selector)
    .content
    .querySelector('.elements')
    .cloneNode(true)
  }

  getView() {
    return this._getTemplate();
  }
}