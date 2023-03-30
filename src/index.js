import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App";

const greetingHeading = "Random Greeting!";
const refreshMsg = "Refresh this page to get a different greeting!";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>{greetingHeading}</h1>
    <h4>{refreshMsg}</h4>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
