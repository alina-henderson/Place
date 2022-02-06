
export default class Popup {
  constructor(selector) {
    this._selector = document.querySelector(selector);
        this._overlay = this._selector.querySelector('.popup__overlay');
        this._closeButton = this._selector.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {


  }

  close() {

  }

  _handleEscClose() {

  }

  setEventListeners() {

  }
}