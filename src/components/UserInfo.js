
export default class UserInfo {
  constructor({ nameSelector, occupationSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._occupation = document.querySelector(occupationSelector);
    this._avatar = document.querySelector(avatarSelector)
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      about: this._occupation.textContent,
    };

    return userData;
  }

  setUserInfo(data) {
    console.log('setuserinfo', data)
    this._name.textContent = data.name;
    this._occupation.textContent = data.occupation;
    this._avatar.src = data.avatar
  }

  getUserID() {
    return this._id;
  }

  setUserID(id) {
    this._id = id;
  }

}