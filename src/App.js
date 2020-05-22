import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Home, SignUp } from './views';
import { PrivateRoute } from './routes';
import { sessionStore } from './api';
import { useStore } from 'effector-react';

function App() {
  const token = useStore(sessionStore);
  return (
    <BrowserRouter>
      <PrivateRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={!!token}
      />
      <Route exact path="/signup" component={SignUp} />
    </BrowserRouter>
  );
}

export default App;
