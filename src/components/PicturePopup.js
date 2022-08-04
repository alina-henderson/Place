import Popup from "./Popup.js";

export default class PicturePopup extends Popup {
	constructor(selector) {
		super(selector);
		this._popupLink = this._popup.querySelector(".popup__image");
		this._popupSign = this._popup.querySelector(".popup__sign");
	}

	open(data) {
		this._popupLink.alt = data._name;
		this._popupLink.src = data._link;
		this._popupSign.textContent = data._name;
		super.open();
	}
}
