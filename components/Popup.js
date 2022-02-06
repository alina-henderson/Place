
export default class Popup {
  constructor(selector) {
    this._selector = document.querySelector(selector);
    this._overlay = this._selector.querySelector('.popup__overlay');
    this._closeButton = this._selector.querySelector('.button-close');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._selector.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  close() {
    this._selector.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {

  }
}