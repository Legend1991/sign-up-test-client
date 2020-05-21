import React from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import { useStore } from 'effector-react';
import { formStore, emailChanged, passwordChanged } from './form-store';
import './style.css';

export function SignUp() {
  const changeEmail = (event) => emailChanged({ email: event.target.value });
  const changePassword = (event) => passwordChanged({ password: event.target.value });

  const value = useStore(formStore)

  return (
    <Box pad="xlarge" align="center" gap="medium">
      <Form
        className="SignUp-form"
        onSubmit={({ value }) => { }}
        validate="blur"
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