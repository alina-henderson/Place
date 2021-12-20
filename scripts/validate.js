
const showError = (form, input, errorMessageText, errorMessageClass, inputErrorClass) => {
  console.log(`#${input.id}-error`);
  const errorMessage = form.querySelector(`#${input.id}-error`);

  errorMessage.textContent = errorMessageText;
  errorMessage.classList.add(errorMessageClass);
  input.classList.add(inputErrorClass);

};

const hideError = (form, input, errorMessageClass, inputErrorClass) => {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = '';
  errorMessage.classList.remove(errorMessageClass);
  input.classList.remove(inputErrorClass);
};


const checkInputValidity = (form, input, { inputErrorClass, errorClass }) => {
  if (!input.validity.valid) {
    showError(form, input, input.validationMessage, errorClass, inputErrorClass);
  } else {
    hideError(form, input, errorClass, inputErrorClass);
  }
};

const hasInvalidInput = (inputs) => {
  return Array.from(inputs).some((element) => !element.validity.valid);
};



//  toggle disable Button
  const toggleButtonState = (inputs, button, inactiveButtonClass) => {
    if (hasInvalidInput(inputs)) {
      button.classList.add(inactiveButtonClass);
      button.disabled = true;

    } else {
      button.classList.remove(inactiveButtonClass);
      button.disabled = false;
    }
  }



//find inputs inside each form and link events
const setInputListeners = (form, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
  const inputs = form.querySelectorAll(inputSelector);

  const submitButton = form.querySelector(submitButtonSelector);

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, rest);

      toggleButtonState(inputs, submitButton, inactiveButtonClass);
    });
  });
};

const enableValidation = ({ formSelector, ...rest }) => {
  //use formSelector as a key for browser to find forms, collect all forms
  const forms = document.querySelectorAll(formSelector);
  //go through each form
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    setInputListeners(form, rest);
  });
}



enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'form__input_type_error', //change line color to red
  errorClass: 'form__error_visible' //make error msg visible
});