import { createStore, createEvent } from 'effector';
import * as yup from 'yup';

const emailSchema = yup.string().email().required();
const passwordSchema = yup.string().min(8).required();
const emailErrorMsg = "Wrong email format";
const passwordEmailMsg = "Password should be min 8 chars";

const valueChanged = (oldValue, payload, name, schema, errorMsg, otherField) => {
  const valid = schema.isValidSync(payload[name]);
  
  if (valid) {
    delete oldValue.formErrors[name];
  } else {
    oldValue.formErrors[name] = [errorMsg];
  }

  return {
    ...oldValue,
    ...payload,
    [`${name}Valid`]: valid,
    formValid: valid && oldValue[`${otherField}Valid`],
    formErrors: {
      ...oldValue.formErrors
    }
  };
}

export const emailChanged = createEvent('emailChanged');
export const passwordChanged = createEvent('passwordChanged');
export const errorSet = createEvent('errorSet');
export const formStore = createStore({
  email: '',
  password: '',
  formErrors: {},
  emailValid: false,
  passwordValid: false,
  formValid: false
}).on(emailChanged, (oldValue, payload) => {
  return valueChanged(oldValue, payload, "email", emailSchema, emailErrorMsg, "password");
}).on(passwordChanged, (oldValue, payload) => {
  return valueChanged(oldValue, payload, "password", passwordSchema, passwordEmailMsg, "email");
}).on(errorSet, (oldValue, payload) => {
  return {
    ...oldValue,
    emailValid: false,
    passwordValid: false,
    formValid: false,
    formErrors: {
      email: payload,
      password: payload
    }
  };
});