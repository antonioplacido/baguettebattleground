import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </auth0Provider>,
  document.getElementById("root")
);
