import store from "../store";

const getUserKey = () => `${store.getState().game.profile.value.email}LastGame`;

export const saveLastGameLocalStorage = (json: string) =>
  localStorage.setItem(getUserKey(), json);

export const getLastGameLocalStorage = () => localStorage.getItem(getUserKey());

export const deleteLastGameLocalStorage = () =>
  localStorage.removeItem(getUserKey());
