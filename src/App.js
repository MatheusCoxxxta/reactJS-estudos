import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*Paginas */

import Login from './view/login/'
import NovoUsuario from './view/usuario-novo/'; 


function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/novoUsuario' component={NovoUsuario} />
    </Router>
  );
}

export default App;
