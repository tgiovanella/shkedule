import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Empresas from './Empresas';
import Projetos from './Projetos';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Empresas} />
      <Route path='/empresas' exact={true} component={Empresas} />
      <Route path='/projetos' exact={true} component={Projetos} />
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);
