import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/layout/ScrollToTop";

const rootElement = document.getElementById("root");

const store = configureStore()

console.log(store.getState())

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop/>
        <App />
      </BrowserRouter>
    </Provider>,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

render();

// https://mdbootstrap.com/docs/react/extended/login-form/
