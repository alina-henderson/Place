import "./index.css";

import { buttonEdit, popupEdit, nameInput, occupationInput, buttonAdd, popupAdd, popupAvatar, buttonAvatarChange, buttonSubmitPicture, buttonSubmitProfile, buttonSubmitAvatar, validationConfig } from "../utils/variables";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PicturePopup from "../components/PicturePopup.js";
import Api from "../components/Api.js";
import PopupConfirmation from "../components/PopupConfirmation.js";

const api = new Api({
	url: "https://mesto.nomoreparties.co/v1/cohort-42",
	headers: {
		authorization: "f25ee209-d794-409d-8eae-29ba78e4618b",
		"Content-Type": "application/json",
	},
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
	.then(([user, cards]) => {
		userInfo.setUserInfo({
			name: user.name,
			occupation: user.about,
			avatar: user.avatar,
		});
		userInfo.setUserID(user._id);
		// render cards
		cardList.renderItems(cards.reverse());
	})
	.catch((err) => {
		console.log(`Unable to load data from the server ${err}`);
	});

const createCard = (cardsData) => {
	const dataUserId = userInfo.getUserID();
	const newCard = new Card(
		".template",
		cardsData.name,
		cardsData.link,
		cardsData.alt,
		cardsData.likes,
		cardsData._id,
		dataUserId,
		cardsData.owner._id,
		() => picturePopup.open(newCard),
		() => {
			popupConfirm.open();
			popupConfirm.setAction(() => {
				api
					.deleteCard(cardsData._id)
					.then(() => {
						newCard.removeCard();
						popupConfirm.close();
					})
					.catch((err) => {
						console.log(`Unable to delete the card ${err}`);
					});
			});
		},

		() => {
			if (!newCard.getIsLike()) {
				api
					.addLikeCard(cardsData._id)
					.then((card) => {
						newCard.handleLike(card);
					})
					.catch((error) => {
						console.log(`Error: unable to add "Like" ${error}`);
					});
			} else {
				api
					.deleteLikeCard(cardsData._id)
					.then((card) => {
						newCard.handleLike(card);
					})
					.catch((error) => {
						console.log(`Error: unable to remove "Like" ${error}`);
					});
			}
		}
	);
	const cardElement = newCard.getView();
	return cardElement;
};

// User info
const userInfo = new UserInfo({
	nameSelector: ".profile__name",
	occupationSelector: ".profile__occupation",
	avatarSelector: ".profile__image",
});

const cardList = new Section(
	{
		renderer: (item) => {
			cardList.addItem(createCard(item));
		},
	},
	".elements"
);

//edit profile/submit form
const submitFormEditHandler = (profileData) => {
	buttonSubmitProfile.textContent = "Saving...";
	api
		.editProfile(profileData)
		.then((user) => {
			userInfo.setUserInfo({
				name: user.name,
				occupation: user.about,
				avatar: user.avatar,
			});
			popupEditProfile.close();
		})
		.catch((error) => {
			console.log(`Error editing profile ${error}`);
		})
		.finally(() => {
			buttonSubmitProfile.textContent = "Save";
		});
};

// add a new picture card
const submitAddCardForm = (inputData) => {
	const card = {
		name: inputData.name,
		link: inputData.link,
	};
	buttonSubmitPicture.textContent = "Creating...";

	api
		.addCard(card)
		.then((card) => {
			cardList.addItem(createCard(card));
			popupAddPicture.close();
		})
		.catch((err) => {
			console.log(`Unable to add the card ${err}`);
		})
		.finally(() => {
			buttonSubmitPicture.textContent = "Create";
		});
};

const submitAvatarForm = (newAvatar) => {
	buttonSubmitAvatar.textContent = "Saving...";

	api
		.patchAvatar(newAvatar)
		.then((user) => {
			userInfo.setUserInfo({
				name: user.name,
				occupation: user.about,
				avatar: user.avatar,
			});
			popupAvatarUpdate.close();
		})
		.catch((error) => {
			console.log(`Error: unable to update the avatar ${error}`);
		})
		.finally(() => {
			buttonSubmitAvatar.textContent = "Save";
		});
};

// each popup gets its own sample from PopupWithForm
const picturePopup = new PicturePopup(".popup_pic");
const popupAddPicture = new PopupWithForm(".popup_add", submitAddCardForm);
const popupEditProfile = new PopupWithForm(".popup_edit", submitFormEditHandler);
const popupConfirm = new PopupConfirmation(".popup_confirm");
const popupAvatarUpdate = new PopupWithForm(".popup_avatar", submitAvatarForm);

const formEditValidator = new FormValidator(validationConfig, popupEdit);
const formAddValidator = new FormValidator(validationConfig, popupAdd);
const formAvatarValidator = new FormValidator(validationConfig, popupAvatar);

formEditValidator.enableValidation();
formAddValidator.enableValidation();
formAvatarValidator.enableValidation();

// EventListeners
picturePopup.setEventListeners();
popupAddPicture.setEventListeners();
popupEditProfile.setEventListeners();
popupConfirm.setEventListeners();
popupAvatarUpdate.setEventListeners();

buttonAdd.addEventListener("click", () => {
	formAddValidator.resetValidation();
	popupAddPicture.open();
});

buttonEdit.addEventListener("click", () => {
	const updatedUserInfo = userInfo.getUserInfo();
	// fill out form with user's data
	nameInput.value = updatedUserInfo.name;
	occupationInput.value = updatedUserInfo.about;
	formEditValidator.resetValidation();
	popupEditProfile.open();
});

buttonAvatarChange.addEventListener("click", function () {
	formAvatarValidator.resetValidation();
	popupAvatarUpdate.open();
});
