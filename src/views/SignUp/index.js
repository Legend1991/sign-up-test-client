import React from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import './style.css';

export function SignUp() {
  const [value, setValue] = React.useState({});

  return (
    <Box pad="xlarge" align="center" gap="medium">
      <Form
        className="SignUp-form"
        value={value}
        onChange={nextValue => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => { }}
        errors={{"email": ["Wrong email or password"], "password": ["Wrong email or password"]}}
      >
        <FormField name="email" htmlfor="text-input-id" label="Email">
          <TextInput id="text-input-id" type="email" name="email" />
        </FormField>
        <FormField name="password" htmlfor="text-input-id" label="Password">
          <TextInput id="text-input-id" type="password" name="password" />
        </FormField>
        <Box direction="row-reverse" gap="medium">
          <Button type="submit" primary label="Sign Up" />
        </Box>
      </Form>
    </Box>
  );
}