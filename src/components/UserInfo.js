
export default class UserInfo {
  constructor( {nameSelector, occupationSelector} ) {
    this._name = document.querySelector(nameSelector);
    this._occupation = document.querySelector(occupationSelector);
  }

  getUserInfo () {
    const userData = {
      name: this._name.textContent,
      occupation: this._occupation.textContent,
    };

    return userData;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._occupation.textContent = data.occupation;
  }
}