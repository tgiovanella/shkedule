import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { UserProvider, userContext } from "../Contexts/User";

import Empresas from "../Empresas";
import Projetos from "../Projetos";
import Atividades from "../Atividades";
import Usuarios from "../Usuarios";
import Login from "../Login";

export default function BasicRoutes() {
  const usuario = useContext(userContext);
  return (
    <Router>
      {usuario.token ? (
        <Switch>
          <Route path="/login" exact={true}>
            <Redirect to="/" />
          </Route>
          <Route path="/" exact={true}>
            <Empresas />
          </Route>
          <Route path="/empresas" exact={true}>
            <Empresas />
          </Route>
          <Route path="/projetos" exact={true}>
            <Projetos />
          </Route>
          <Route path="/atividades" exact={true}>
            <Atividades />
          </Route>
          <Route path="/usuarios" exact={true}>
            <Usuarios />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact={true}>
            <Redirect to="/login" />
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
        </Switch>
      )}
    </Router>
  );
}
