import Popup from "./Popup.js";

export default class PicturePopup extends Popup {
  constructor(selector) {
    super(selector);
    this._popupLink = this._selector.querySelector('.popup__image');
    this._popupSign = this._selector.querySelector('.popup__sign');
  }

  open(name, link) {
    this._popupLink.alt = name;
    this._popupLink.src = link;
    this._popupSign.textContent = name;
    super.open();
  }
}