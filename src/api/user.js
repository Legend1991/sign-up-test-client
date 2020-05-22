import { createEffect } from 'effector';
import { tokenChanged } from './session-store';
import { apiEndpoint } from '../config.json';

export const signUp = createEffect('signUp').use(({ email, password }) => {
  return fetch(`${apiEndpoint}/signup`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify({ email, password })
  }).then(res => res.json()).then(res => {
    if (Array.isArray(res.errors) && res.errors.length > 0) {
      tokenChanged('');
      throw new Error(res.errors.pop().message);
    }
    tokenChanged(res.result);
    return res;
  });
});
