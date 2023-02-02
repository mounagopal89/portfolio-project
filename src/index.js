import store from "./store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import reportWebVitals from './reportWebVitals';

// Before dispatch an Action,we gonna subsribe to the store.
const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});
// this subscribe fn is called everytime the state of the store is changed
store.dispatch({
  type: "bugadded",
  payload: {
    description: "Bug1",
  },
  // resolved: true,
});
unsubscribe();
store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
