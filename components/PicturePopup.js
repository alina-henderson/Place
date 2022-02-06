import Popup from "./Popup.js";

export default class PicturePopup extends Popup {
  constructor(selector) {
    super(selector);
  }

  open(name, link) {
    super.open();
    this._imageLink = this._selector.querySelector('.popup__image');
    this._placeName = this._selector.querySelector('.popup__sign');
    this._imageLink.alt = name;
    this._imageLink.src = link;
    this._placeName.textContent = name;
  }
}