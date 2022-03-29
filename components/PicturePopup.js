import Popup from "./Popup.js";

export default class PicturePopup extends Popup {
  constructor(selector) {
    super(selector);
    this._popupLink = this._selector.querySelector('.popup__image');
    this._popupSign = this._selector.querySelector('.popup__sign');
  }

  open(data) {
    this._popupLink.alt = data.name;
    this._popupLink.src = data.link;
    this._popupSign.textContent = data.name;
    super.open();
  }
}