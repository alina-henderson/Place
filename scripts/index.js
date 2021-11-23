const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close-icon");
const form = popup.querySelector(".form");
const nameInput = popup.querySelector(".form__input_value_name");
const occupationInput = popup.querySelector(".form__input_value_occupation");
const nameValue = document.querySelector(".profile__name");
const occupationValue = document.querySelector(".profile__occupation");

function open() {
  
  popup.classList.add("popup_opened");
  nameInput.value = nameValue.textContent;
  occupationInput.value = occupationValue.textContent;
}

function close() {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  occupationValue.textContent = occupationInput.value;
  close();
}

editButton.addEventListener('click', open);
popupCloseButton.addEventListener('click', close);
form.addEventListener('submit', formSubmitHandler);