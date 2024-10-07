// imports react library into the file
import React from "react";
// ReactDOM class from lib to render components into the browser
import ReactDOM from "react-dom/client";
// hub (App.js) is imported. <App />
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM has method render. Components and document element as parameters
// Component is: <App /> , document elemets is <div> with id root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
