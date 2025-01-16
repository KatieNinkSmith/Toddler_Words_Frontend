import * as usersAPI from "./users-api";

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  // console.log(token);
  localStorage.setItem("token", token);
  return getUser();
}

export async function login(credentials) {
  console.log(credentials);
  const token = await usersAPI.login(credentials);
  // persist the token
  localStorage.setItem("token", token);
  return getUser();
}

export function getToken() {
  const token = localStorage.getItem("token");
  // console.log(token);
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  // console.log(payload.user.name);
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // console.log(token);
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  localStorage.removeItem("token");
}

export default { login, signUp, getToken, getUser, logOut };
