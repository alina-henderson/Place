console.log("loaded")
const editButton = document.querySelector(".profile__edit-button_type_open");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close-icon");
const addButton = document.querySelector(".profile__add-button_type-open");
const popupOverlay = popup.querySelector(".popup__overlay");

const form = popup.querySelector(".form");
const nameInput = popup.querySelector(".popup__name");
const occupationInput = popup.querySelector(".popup__occupation");




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


editButton.addEventListener('click', open);
popupCloseButton.addEventListener('click', close);
addButton.addEventListener('click', open);
popupOverlay.addEventListener('click', close);
form.addEventListener('submit', formSubmitHandler);

