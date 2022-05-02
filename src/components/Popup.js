export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._overlay = this._popup.querySelector('.popup__overlay');
    this._closeButton = this._popup.querySelector('.button-close');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  }

  setEventListeners() {
    this._overlay.addEventListener('click', () => {
      this.close();
    });
    this._closeButton.addEventListener('click', () => {
      this.close();
    });
  }
}