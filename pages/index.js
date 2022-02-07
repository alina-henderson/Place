import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PicturePopup from '../components/PicturePopup.js';


// export { openPopup };



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

const elements = document.querySelector('.elements');
const popups = document.querySelectorAll('.popup');

//for edit button
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const formEdit = popupEdit.querySelector('.form_edit');
const nameInput = popupEdit.querySelector('.form__input_value_name');
const occupationInput = popupEdit.querySelector('.form__input_value_occupation');
const nameValue = document.querySelector('.profile__name');
const occupationValue = document.querySelector('.profile__occupation');

//for add button
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const formAdd = popupAdd.querySelector('.form_add');
const titleInput = popupAdd.querySelector('.form__input_value_title');
const linkInput = popupAdd.querySelector('.form__input_value_image-link');
const titleValue = document.querySelector('.element__title');
const linkValue = document.querySelector('.element__picture');
const buttonSave = popupAdd.querySelector('.popup__button_add');


// const addFormValidation = new FormValidator(dataValidation, formAddCards);
// const editProfileValidation = new FormValidator(dataValidation, formProfile);

// addFormValidation.enableValidation();
// formProfileValidation.enableValidation();

//card container
const template = '.template';

// const addCardPopup = new PopupWithForm(popupCards, handleSubmitAddCard);
// const popupWithImage = new PopupWithImage(popupImage);
// const editProfilePopup = new PopupWithForm(popupProfile, handleSubmitProfile)

// function createCard(item) {
//   const card = new Card('.template', item.name, item.link, item.alt);
//   return card.getView();
// };

const createCard = (item) => {
  const newCard = new Card('.template', item.name, item.link, item.alt);
    // handleCardClick: () => popupWithImage.open(item));

  const cardsElement = newCard.getView();
  return cardsElement;
}

const cardList = new Section({
  items: initialCards.reverse(),
  renderer: createCard,
},
'.elements'
);
cardList.renderItem();

// cardList.renderItem();
// function render() {
//   const cards = initialCards.map((item) => {
//     return createCard(item);
//   });

//   elements.append(...cards);
// }

// render();

// //command open any popup
// function openPopup(popup) {
//   //enable close with ESC
//   document.addEventListener('keydown', closeEsc);
//   popup.classList.add('popup_opened');
// }

// popups.forEach((popup) => {
//   const closeButton = popup.querySelector('.button-close');
//   closeButton.addEventListener('click', () => closePopup(popup));
//   const overlay = popup.querySelector('.popup__overlay');
//   overlay.addEventListener('click', () => closePopup(popup));
// })

// //close by pressing esc
// function closeEsc(evt) {
//   if (evt.key === 'Escape') {
//     const popupOpened = document.querySelector('.popup_opened');
//     closePopup(popupOpened);
//   }
// }

// //command close any popup
// function closePopup(popup) {
//   document.removeEventListener('keydown', closeEsc);
//   popup.classList.remove('popup_opened');
// }

const enableValidation = ({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorMessageClass: 'form__error_visible'
});

const formEditValidator = new FormValidator(enableValidation, popupEdit);
const formAddValidator = new FormValidator(enableValidation, popupAdd);
formEditValidator.enableValidation();
formAddValidator.enableValidation();

// // describe actions in edit popup
// function openEditProfile() {
//   nameInput.value = nameValue.textContent;
//   occupationInput.value = occupationValue.textContent;
//   openPopup(popupEdit);
//   formEditValidator.resetValidation();
// }

// // describe actions in add popup
// function openAddPopup() {
//   formAdd.reset();
//   openPopup(popupAdd);
//   formAddValidator.resetValidation();
// }

// //edit profile
// function submitFormEditHandler(evt) {
//   evt.preventDefault();
//   nameValue.textContent = nameInput.value;
//   occupationValue.textContent = occupationInput.value;

//   closePopup(popupEdit);
// }

// //add new card to places
// function submitFormAddHandler(evt) {
//   evt.preventDefault();
//   elements.prepend(createCard({
//     name: titleInput.value,
//     link: linkInput.value,
//     alt: titleInput.value,
//   })
//   );
//   titleInput.value = '';
//   linkInput.value = '';
//   closePopup(popupAdd);
// }

// editButton.addEventListener('click', openEditProfile);
// formEdit.addEventListener('submit', submitFormEditHandler);
// formAdd.addEventListener('submit', submitFormAddHandler);
// addButton.addEventListener('click', openAddPopup);


//новый экземпляр класса Section
//const defaultCardList = new Section({ data: items }, cardListSelector);