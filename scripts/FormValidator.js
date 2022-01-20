class FormValidator {
  constructor(selector, form) {
    this._form = form;
    this._inputSelector = selector.inputSelector;
    this._errorMessageClass = selector.errorMessageClass;
    this._inputErrorClass = selector.inputErrorClass;
    this._inactiveButtonClass = selector.inactiveButtonClass;




    this._inputs = this._form.querySelectorAll(this._inputSelector);
  }

  _showError = (input, errorMessageText) => {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = errorMessageText;
    errorMessage.classList.add(errorMessageClass);
    input.classList.add(inputErrorClass);
  };

  _hideError = (input) => {
    const errorMessage = form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = '';
    errorMessage.classList.remove(errorMessageClass);
    input.classList.remove(inputErrorClass);
  };

  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
      showError(input, input.validationMessage);
    } else {
      this._hideError(input);
    }
  };

  _hasInvalidInput = () => {
    return Array.from(this._inputs).some((element) => !element.validity.valid);
  };

//  toggle disable Button if invalid
  _toggleButtonState = (inputs, button) => {
  if (this._hasInvalidInput(inputs)) {
    button.classList.add(this._inactiveButtonClass);
    button.disabled = true;

  } else {
    button.classList.remove(this._inactiveButtonClass);
    button.disabled = false;
  }
}

}

export default FormValidator;