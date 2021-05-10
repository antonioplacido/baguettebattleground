import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.AUTH_DOMAIN;
const clientId = process.env.UTH_CLIENT_ID;

console.log(domain);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-8rg3l0jm.us.auth0.com"
      clientId="xhijSCti5Yf5FYfbx7KUGHAFFa890XWM"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);
