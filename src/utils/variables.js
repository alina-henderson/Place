//for edit button
export const buttonEdit = document.querySelector(".profile__edit-button");
export const popupEdit = document.querySelector(".popup_edit");
export const nameInput = popupEdit.querySelector(".form__input_value_name");
export const occupationInput = popupEdit.querySelector(".form__input_value_occupation");

//for add button
export const buttonAdd = document.querySelector(".profile__add-button");
export const popupAdd = document.querySelector(".popup_add");

//change avatar
export const popupAvatar = document.querySelector(".popup_avatar");
export const buttonAvatarChange = document.querySelector(".profile__image-cropper");

//buttons in popups
export const buttonSubmitPicture = popupAdd.querySelector(".popup__button_add");
export const buttonSubmitProfile = popupEdit.querySelector(".popup__button_edit");
export const buttonSubmitAvatar = document.querySelector(".popup__button_avatar");

export const validationConfig = {
	formSelector: ".form",
	inputSelector: ".form__input",
	submitButtonSelector: ".popup__button",
	inactiveButtonClass: "popup__button_disabled",
	inputErrorClass: "form__input_type_error",
	errorMessageClass: "form__error_visible",
};
