import { createStore, createEvent } from 'effector';
import connectLocalStorage from "effector-localstorage/sync";

const sessionLocalStorage = connectLocalStorage("token")
  .onError((err) => console.log(err))

export const tokenChanged = createEvent('tokenChanged');
export const sessionStore = createStore(sessionLocalStorage.init(''))
  .on(tokenChanged, (oldValue, payload) => payload);

sessionStore.watch(sessionLocalStorage);