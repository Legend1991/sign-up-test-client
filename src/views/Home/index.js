import React, { Fragment } from 'react';
import { Box, Button, Header, Heading } from 'grommet';
import { tokenChanged } from '../../api';
import './style.css';

const signOut = () => tokenChanged('');

export function Home() {
  return (
    <Fragment>
      <Header direction="row-reverse" pad="small" background="brand">
        <Button type="submit" primary label="Sign Out" onClick={signOut} />
        <Heading level="3" margin="none">Sign Up Test</Heading>
      </Header>
      <Box pad="xlarge" align="center" gap="large">
        <Heading margin="none">Welcome!</Heading>
        <Heading margin="none">&#127881;</Heading>
      </Box>
    </Fragment>
  );
}