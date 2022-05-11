import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

fetch("http://localhost:4000/users/demo", {
  method: "GET",
  headers: {
    "Accept": "application/json"
  }
}).then(rs => {
  let d = rs.json()
  console.log(d);
});

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
