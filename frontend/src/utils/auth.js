import { BASE_URL } from "./utils";

function handleReply(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function register(data) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: "include",
    headers,
    body: JSON.stringify(data),
  }).then(handleReply);
}

export function login(data) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers,
    body: JSON.stringify(data),
  }).then(handleReply);
}

export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }).then(handleReply);
}
