import React from 'react';
import { Redirect } from "react-router-dom";
import { Box, Button, Form, FormField, Heading, Text, TextInput } from 'grommet';
import { useStore } from 'effector-react';
import { formStore, emailChanged, errorSet, passwordChanged } from './form-store';
import { signUp, sessionStore } from '../../api';
import './style.css';

const changeEmail = (event) => emailChanged({ email: event.target.value });
const changePassword = (event) => passwordChanged({ password: event.target.value });
const submit = (event) => { console.log('submit'); signUp(event.value) };

signUp.fail.watch(({ error }) => errorSet(error.message));

export function SignUp(props) {
  const value = useStore(formStore);
  const token = useStore(sessionStore);

  if (!!token) {
    return (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    );
  }

  return (
    <Box pad="xlarge" align="center" gap="medium">
      <Box background={{ "light": "light-2" }} pad="medium" round={true} align="start" gap="small">
        <Heading level="4" margin="none">Test Credentials</Heading>
        <Text>test@test.com</Text>
        <Text>test1234</Text>
      </Box>
      <Form
        className="SignUp-form"
        onSubmit={submit}
        errors={value.formErrors}
      >
        <FormField name="email" htmlfor="email-input-id" label="Email">
          <TextInput id="email-input-id" name="email" onChange={changeEmail} />
        </FormField>
        <FormField name="password" htmlfor="password-input-id" label="Password">
          <TextInput id="password-input-id" type="password" name="password" onChange={changePassword} />
        </FormField>
        <Box direction="row-reverse" gap="medium">
          <Button disabled={!value.formValid} type="submit" primary label="Sign Up" />
        </Box>
      </Form>
    </Box>
  );
}