import { BASE_URL } from "./utils";

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
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
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    }).then((res) => {
      return this._requestResult(res);
    });
  }
  //Получение карточек
  getInitialCard() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    }).then((res) => {
      return this._requestResult(res);
    });
  }
  //Запрос на изменение профиля
  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
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
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => {
      return this._requestResult(res);
    });
  }
// Добавление картчоки
  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
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
      return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        },
      }).then((res) => {
        return this._requestResult(res);
      });
    } else {
      return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        },
      }).then((res) => {
        return this._requestResult(res);
      });
    }
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
    }).then((res) => {
      this._requestResult(res);
    });
  }
}
const apiFetch = new Api({
  baseUrl: BASE_URL,
});

export default apiFetch;
