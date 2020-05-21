import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Home, SignUp } from './views';
import { PrivateRoute } from './routes';

function App() {
  return (
    <BrowserRouter>
      <PrivateRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={true}
      />
      <Route exact path="/signup" component={SignUp} />
    </BrowserRouter>
  );
}

export default App;
