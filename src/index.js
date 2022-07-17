import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ReactKeycloakProvider } from '@react-keycloak/web'

import keycloak from './keycloak'

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <ReactKeycloakProvider
  authClient={keycloak}
  initOptions={{onLoad: 'login-required'}}
>


    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById("root")
);