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

// //create list of places
// const elementsContainer = document.querySelector('.elements');
// const templateEl = document.querySelector('.template');

// //for edit button
// const editButton = document.querySelector('.profile__edit-button');
// const popupEdit = document.querySelector('.popup_edit');
// const formEdit = popupEdit.querySelector('.form_edit');
// const nameInput = popupEdit.querySelector('.form__input_value_name');
// const occupationInput = popupEdit.querySelector('.form__input_value_occupation');
// const nameValue = document.querySelector('.profile__name');
// const occupationValue = document.querySelector('.profile__occupation');

// //for add button
// const addButton = document.querySelector('.profile__add-button');
// const popupAdd = document.querySelector('.popup_add');
// const formAdd = popupAdd.querySelector('.form_add');
// const titleInput = popupAdd.querySelector('.form__input_value_title');
// const linkInput = popupAdd.querySelector('.form__input_value_image-link');
// const titleValue = document.querySelector('.element__title');
// const linkValue = document.querySelector('.element__picture');
// const buttonSave = popupAdd.querySelector('.popup__button_add');

// const popupPic = document.querySelector('#popuppic')
// const imagePopupPic = document.querySelector('.popup__image');
// const titlePopupPic = document.querySelector('.popup__sign');
// const popup = document.querySelector('.popup');


// function render() {
//   const html = initialCards
//     .map((item) => {
//       return getItem(item);
//     });

//   elementsContainer.append(...html);
// }

// function getItem(item) {
//   //clone template with subsidiary elements
//   const newItem = templateEl.content.cloneNode(true);
//   //place name from array: get link to name, refer to its text content, assign title to text content
//   const nameEl = newItem.querySelector('.element__title');
//   nameEl.textContent = item.name;

//   const imageEl = newItem.querySelector('.element__picture');
//   imageEl.src = item.link;
//   imageEl.alt = item.alt;

//   //get link to the trash button
//   const removeButton = newItem.querySelector('.element__button-trash');
//   removeButton.addEventListener('click', deleteElement);

//   //set up like button
//   newItem.querySelector('.element__button-like').addEventListener('click', function (evt) {
//     evt.target.classList.toggle('element__button-like_active');
//   });

//   //full-size image popups
//   const openPopupPic = newItem.querySelector('.element');

//   newItem.querySelector('.element__picture').addEventListener('click', function () {
//     imagePopupPic.src = item.link;
//     titlePopupPic.textContent = item.name;
//     imagePopupPic.alt = item.alt;

//     openPopup(popupPic);

// })

//   return newItem;
// }

// //command open any popup
// function openPopup(popup) {
//   //enable close with ESC
//   document.addEventListener('keydown', closeEsc);
//   popup.classList.add('popup_opened');
// }

// const popups = document.querySelectorAll('.popup')
// popups.forEach((popup) => {
//   const closeButton = popup.querySelector('.button-close');
//   closeButton.addEventListener('click', () => closePopup(popup));
//   const overlay = popup.querySelector('.popup__overlay');
//   overlay.addEventListener('click', () => closePopup(popup));
// })

// //close by pressing esc
// function closeEsc(evt) {
//   if (evt.key === 'Escape') {
//       const popupOpened = document.querySelector('.popup_opened');
//       closePopup(popupOpened);
//   }
// }
// //command close any popup
// function closePopup(popup) {
//   document.removeEventListener('keydown', closeEsc);
//   popup.classList.remove('popup_opened');
// }

// // describe actions in edit popup
// function openEditProfile() {
//   nameInput.value = nameValue.textContent;
//   occupationInput.value = occupationValue.textContent;
//   openPopup(popupEdit);
// }

// // describe actions in add popup
// function openAddProfile() {
//   formAdd.reset();
//   buttonSave.classList.add("popup__button_disabled");
//   buttonSave.disabled = true;
//   openPopup(popupAdd);
// }

// function submitFormEditHandler(evt) {
//   evt.preventDefault();
//   nameValue.textContent = nameInput.value;
//   occupationValue.textContent = occupationInput.value;

//   closePopup(popupEdit);
// }

// function submitFormAddHandler(evt) {
//   evt.preventDefault();
//   const elementsItem = getItem({name: titleInput.value, link: linkInput.value, alt: titleInput.value});
//   elementsContainer.prepend(elementsItem);

//   closePopup(popupAdd);
// }

// //command trash button
// function deleteElement(event) {
//   const targetElement = event.target;
//   const elementsItem = targetElement.closest('.element')
//   elementsItem.remove();
// }

// editButton.addEventListener('click', openEditProfile);
// formEdit.addEventListener('submit', submitFormEditHandler);
// formAdd.addEventListener('submit', submitFormAddHandler);
// addButton.addEventListener('click', openAddProfile);

// render();