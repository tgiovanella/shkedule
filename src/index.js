import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Empresas from './Empresas';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Empresas} />
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);
