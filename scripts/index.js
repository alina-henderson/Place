const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Фото Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Фото Челябинская область'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Фото Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Фото Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Фото Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Фото Байкал'
  }
];


const elementsContainer = document.querySelector(".elements");
const templateEl = document.querySelector(".template");

function render() {
  const html = initialCards
  .map((item) => {
    return getItem(item);
  });

elementsContainer.append(...html);
}

function getItem(item) {
  //clone template with subsidiary elements
  const newItem = templateEl.content.cloneNode(true);
    //place name from array: get link to name, refer to its text content, assign title to text content
  const nameEl = newItem.querySelector('.element__title');
  nameEl.textContent = item.name;

  const imageEl = newItem.querySelector('.element__picture');
  imageEl.src = item.link;
  imageEl.alt = item.alt;

  return newItem;
}

render();

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