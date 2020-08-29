import Consts from './Consts';

export function getToken() {
  return localStorage.getItem(Consts.TOKEN_NAME);
}

export function setToken(token) {
  return localStorage.setItem(Consts.TOKEN_NAME, token);
}

export function removeToken() {
  return localStorage.removeItem(Consts.TOKEN_NAME);
}

export function hasToken() {
  return getToken() !== null;
}
