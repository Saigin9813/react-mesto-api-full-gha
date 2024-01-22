import { apiCofig } from "./utils";

class Api {
  constructor({ url, headers }) {
    this._baseUrl = url;
    this._token = headers;
  }
  //* Проверка статуса запроса
  _requestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
      );
    }
  }
  // Получения информации о пользователе
  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._token,
    }).then((res) => {
      return this._requestResult(res);
    });
  }
  //Получение карточек
  getInitialCard() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._token,
    }).then((res) => {
      return this._requestResult(res);
    });
  }
  //Запрос на изменение профиля
  editProfile(name, about) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._token,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => {
      return this._requestResult(res);
    });
  }
  // Запрос на изменение аватара
  editAvatar(avatar) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._token,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => {
      return this._requestResult(res);
    });
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._token,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._requestResult);
  }

  // Постановка и удалание лайка
  changeLikeCardStatus(idCard, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}cards/${idCard}/likes`, {
        method: "PUT",
        headers: this._token,
      }).then((res) => {
        return this._requestResult(res);
      });
    } else {
      return fetch(`${this._baseUrl}cards/${idCard}/likes`, {
        method: "DELETE",
        headers: this._token,
      }).then((res) => {
        return this._requestResult(res);
      });
    }
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}cards/${id}`, {
      method: "DELETE",
      headers: this._token,
    }).then((res) => {
      this._requestResult(res);
    });
  }
}
const apiFetch = new Api(apiCofig);

export default apiFetch;
