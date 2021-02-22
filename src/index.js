import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { UserProvider } from "./Contexts/User";

import BasicRoutes from "./Routers/BasicRoutes";

ReactDOM.render(
  <UserProvider>
    <BasicRoutes />
  </UserProvider>,
  document.getElementById("root")
);
