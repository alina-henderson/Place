class FormValidator {
  constructor(selector, form) {
    this._selector = selector;
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

  


}

export default FormValidator;