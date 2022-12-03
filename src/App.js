import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Pages Component
import Registrasi from './pages/registrasi/index';
import Login from './pages/login/Index';
import LupaPassword from './pages/lupa-password/Index';
import NotFound from './pages/404/index';

function App(){
  return (
    <Router>
      <Switch>
        <Route path="/registrasi" component={Registrasi} />
        <Route path="/login" component={Login} />
        <Route path="/lupa-password" component={LupaPassword} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App