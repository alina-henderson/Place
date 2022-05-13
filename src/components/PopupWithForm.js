import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submit = submitForm;
    this._form = this._popup.querySelector('.form');
    this._formInputs = this._form.querySelectorAll('.form__input');
  }

  // _getInputValues() {
  //   let allFormValues = {};
  //   this._formInputs.forEach((input) => {
  //   allFormValues[input.name] = input.value;
  //   });

  //   return allFormValues;
  // }
  _getInputValues() {
    return this._formInputs.forEach((input) => {
    input.name = input.value;
    });
    console.log(this._formInputs.forEach((input) => {
      input.name = input.value;
      }))

  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._submit(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmit);
  }


  close() {
    super.close();
    this._form.reset();
  }
}