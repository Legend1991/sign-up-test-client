import React, { Fragment } from 'react';
import { Box, Button, Header, Heading } from 'grommet';
import './style.css';

export function Home() {
  return (
    <Fragment>
      <Header direction="row-reverse" pad="small" background="brand">
        <Button type="submit" primary label="Sign Out" />
        <Heading level="3" margin="none">Sign Up Test</Heading>
      </Header>
      <Box pad="xlarge" align="center" gap="large">
        <Heading margin="none">Welcome!</Heading>
        <Heading margin="none">&#127881;</Heading>
      </Box>
    </Fragment>
  );
}