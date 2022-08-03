import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
	constructor(popupSelector, submitForm) {
		super(popupSelector);
		this._submit = submitForm;
		this._form = this._popup.querySelector(".form");
		this._formInputs = this._form.querySelectorAll(".form__input");
		this._submitButton = this._popup.querySelector(".popup__button");
	}

	_getInputValues() {
		const allFormValues = {};
		this._formInputs.forEach((input) => {
			allFormValues[input.name] = input.value;
		});
		return allFormValues;
	}

	_handleSubmit = (evt) => {
		evt.preventDefault();
		this._submit(this._getInputValues());
		this.close();
	};

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener("submit", this._handleSubmit.bind(this));
	}

	close() {
		super.close();
		this._form.reset();
	}
}
