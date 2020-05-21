import React from 'react';
import { Button, Input } from '../../components';
import './style.css';

export function SignUp() {
  return (
    <div className="App">
      <Input type="email" />
      <Input type="password" />
      <Button>Sign Up</Button>
    </div>
  );
}