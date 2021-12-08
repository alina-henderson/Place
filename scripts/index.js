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

//create list of places
const elementsContainer = document.querySelector('.elements');
const templateEl = document.querySelector('.template');

//for edit button
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupEditCloseButton = popupEdit.querySelector('.button-close_edit');
const formEdit = popupEdit.querySelector('.form_edit');
const nameInput = popupEdit.querySelector('.form__input_value_name');
const occupationInput = popupEdit.querySelector('.form__input_value_occupation');
const nameValue = document.querySelector('.profile__name');
const occupationValue = document.querySelector('.profile__occupation');

//for add button
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const popupAddCloseButton = popupAdd.querySelector('.button-close_add');
const formAdd = popupAdd.querySelector('.form_add');
const titleInput = popupAdd.querySelector('.form__input_value_title');
const linkInput = popupAdd.querySelector('.form__input_value_image-link');
const titleValue = document.querySelector('.element__title');
const linkValue = document.querySelector('.element__picture');
const buttonSave = popupAdd.querySelector('.popup__button_add');

//to be deleted
//for popup-pic close button
// const popupPicBtn = document.querySelector('.button-close_popuppic');

const popupPic = document.querySelector('.popup-pic')
const imagePopupPic = document.querySelector('.popup-pic__image');
const titlePopupPic = document.querySelector('.popup-pic__title');


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

  //get link to the trash button
  const removeButton = newItem.querySelector('.element__button-trash');
  removeButton.addEventListener('click', deleteElement);

  //set up like button
  newItem.querySelector('.element__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button-like_active');
  });

  //modify to open with open popup
  //open full-size image popups
  const openPopupPic = newItem.querySelector('.element');


  newItem.querySelector('.element__picture').addEventListener('click', function () {
    imagePopupPic.src = item.link;
    titlePopupPic.textContent = item.name;
    imagePopupPic.alt = item.alt;

    openPopup(popupPic);

  //do we need it here?
  // function openPopup() {
  //   popup.classList.add('popup_opened');
  // }


  //to be deleted
  // openPopupPic();

  // function closePopupPic() {
  //   popupPic.classList.remove('popup-pic_opened');
  // }

  // popupPicBtn.addEventListener('click', closePopupPic);

})

  return newItem;
}

//command open any popup
function openPopup() {
  popupEdit.classList.add('popup_opened');
}


//command edit button
function openEdit() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = nameValue.textContent;
  occupationInput.value = occupationValue.textContent;
}

function closeEdit() {
  popupEdit.classList.remove('popup_opened');
}

//command open any popup
function openAdd() {
  popupAdd.classList.add('popup_opened');
  titleInput.value = '';
  linkInput.value = '';

}

function closeAdd() {
  popupAdd.classList.remove('popup_opened');
}

function submitFormEditHandler(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  occupationValue.textContent = occupationInput.value;

  closeEdit();
}

function submitFormAddHandler(evt) {
  evt.preventDefault();
  const elementsItem = getItem({name: titleInput.value, link: linkInput.value, alt: titleInput.value});
  elementsContainer.prepend(elementsItem);

  closeAdd();
}

//command trash button
function deleteElement(event) {
  const targetElement = event.target;
  const elementsItem = targetElement.closest('.element')
  elementsItem.remove();
}

// editButton.addEventListener('click', openEdit);
// popupEditCloseButton.addEventListener('click', closeEdit);
formEdit.addEventListener('submit', submitFormEditHandler);
buttonSave.addEventListener('click', submitFormAddHandler);
// addButton.addEventListener('click', openAdd);
// popupAddCloseButton.addEventListener('click', closeAdd);

render();