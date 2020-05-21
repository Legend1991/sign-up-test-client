import { createStore, createEvent } from 'effector';

const emailRegex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailErrorMsg = "Wrong email format";
const passwordEmailMsg = "Password should be min 8 chars and numbers";

const valueChanged = (oldValue, payload, name, regex, errorMsg, otherField) => {
  const valid = regex.test(payload[name]);
  const formErrors = {[name]: valid ? undefined : [errorMsg]};
  return {
    ...oldValue,
    ...payload,
    [`${name}Valid`]: valid,
    formValid: valid && oldValue[`${otherField}Valid`],
    formErrors: {
      ...oldValue.formErrors, 
      ...formErrors
    }};
}

export const emailChanged = createEvent('emailChanged');
export const passwordChanged = createEvent('passwordChanged');
export const formStore = createStore({
  email: '',
  password: '',
  formErrors: {},
  emailValid: false,
  passwordValid: false,
  formValid: false
}).on(emailChanged, (oldValue, payload) => {
    return valueChanged(oldValue, payload, "email", emailRegex, emailErrorMsg, "password");
}).on(passwordChanged, (oldValue, payload) => {
    return valueChanged(oldValue, payload, "password", passwordRegex, passwordEmailMsg, "email");
});