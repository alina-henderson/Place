import Popup from "./Popup.js";

export default class PopupConfirmation extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._form = this._popup.querySelector(".popup__content_confirm");
	}

	open() {
		super.open();
	}

	setAction(action) {
		this._actionCallback = action;
	}

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener("submit", (evt) => {
			evt.preventDefault();
			this._actionCallback();
		});
	}
}
