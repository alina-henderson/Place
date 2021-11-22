console.log("loaded")
const editButton = document.querySelector(".profile__edit-button_type_open");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close-icon");
const addButton = document.querySelector(".profile__add-button_type-open");
const form = popup.querySelector(".form");
const nameInput = popup.querySelector(".form__name");
const occupationInput = popup.querySelector(".form__occupation");
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
  nameOutput.textContent = nameInput.value;
  occupationOutput.textContent = occupationInput.value;
}

editButton.addEventListener('click', open);
popupCloseButton.addEventListener('click', close);
addButton.addEventListener('click', open);
form.addEventListener('submit', formSubmitHandler);