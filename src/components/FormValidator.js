class FormValidator {
  constructor(selector, form) {
    this._form = form;
    this._inputSelector = selector.inputSelector;
    this._errorMessageClass = selector.errorMessageClass;
    this._inputErrorClass = selector.inputErrorClass;
    this._inactiveButtonClass = selector.inactiveButtonClass;
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._submitButtonSelector = selector.submitButtonSelector;
    this._inputs = this._form.querySelectorAll(this._inputSelector);
    this._button = this._form.querySelector('.popup__button');
  };

  _showError = (input, errorMessageText) => {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = errorMessageText;
    errorMessage.classList.add(this._errorMessageClass);
    input.classList.add(this._inputErrorClass);
  };

  _hideError = (input) => {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = '';
    errorMessage.classList.remove(this._errorMessageClass);
    input.classList.remove(this._inputErrorClass);
  };

  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
      this._showError(input, input.validationMessage);
    } else {
      this._hideError(input);
    }
  };

  _hasInvalidInput = () => {
    return Array.from(this._inputs).some((element) => !element.validity.valid);
  };

  //  toggle disable Button if invalid
  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;

    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    }
  };

  _setInputListeners = () => {
    this._toggleButtonState();
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._toggleButtonState(this._inputs, this._submitButton);
    this._inputs.forEach((inputElement) => {
      this._hideError(inputElement)
    });
  };

  enableValidation = () => {
    this._setInputListeners();
  };
}

export default FormValidator;