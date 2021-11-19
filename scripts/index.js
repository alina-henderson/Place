console.log("loaded")
const editButton = document.querySelector(".profile__edit-button_type_open");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close-icon");
const addButton = document.querySelector(".profile__add-button_type-open");
const popupOverlay = popup.querySelector(".popup__overlay");



function open() {
  popup.classList.add("popup_opened");
}

function close() {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener('click', open);
popupCloseButton.addEventListener('click', close);
addButton.addEventListener('click', open);
popupOverlay.addEventListener('click', close);