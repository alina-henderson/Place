
// const showError = (form, inputSelector, errorMessage) => {
//   const errorElemet = form.querySelector(`.${inputSelector.id}-error`);
//   errorElement.textContent = errorMessage;
//   form.classList.add(inputErrorClass);
//   errorElement.classList.add(errorClass);
// };

// const hideError = (form, input, inputSelector) => {
//   const errorElemet = form.querySelector(`.${inputSelector.id}-error`);
//   errorElement.textContent = '';
//   inputSelector.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
// };


const checkInputValidity = (form, input) => {
  if (!input.validity.valid) {
    // showError(form, inputSelector, inputSelector.validationMessage, errorClass, inputErrorClass);
    console.log('invalid')
  } else {
    // hideError(form, inputSelector, inputErrorClass, errorClass);
    console.log('valid')

  }
};

// const hasInvalidInput = (inputList) => {



// const toggleButtonState = (inputList, buttonElement) => {




//find inputs inside each form and link events
const setInputListeners = (form, { inputSelector }) => {
  const inputs = form.querySelectorAll(inputSelector);

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input)
    });
  });
}

const enableValidation = ({ formSelector, ...rest }) => {
  //use formSelector as a key for browser to find forms, collect all forms
  const forms = document.querySelectorAll(formSelector);
  //go through each form
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    setInputListeners(form, rest)
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
