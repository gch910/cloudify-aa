import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import { Provider } from "react-redux";
import { ModalProvider } from "./context/Modal";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ModalProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ModalProvider>
  </Provider>,
  document.getElementById("root")
);
