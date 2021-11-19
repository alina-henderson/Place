console.log("loaded")
const editLink = document.querySelector(".profile__edit-button_type_open")
const popup = document.querySelector(".popup")
const popupCloseButton = popup.querySelector(".popup__close-icon")
const addLink = document.querySelector(".profile__add-button_type-open")


function open() {
  popup.classList.add("popup_opened");
}

function close() {
  popup.classList.remove("popup_opened");
}

editLink.addEventListener('click', open);
popupCloseButton.addEventListener('click', close);
addLink.addEventListener('click', open);


