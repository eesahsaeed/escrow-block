import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

if (!sessionStorage.getItem("fetch")){
  sessionStorage.setItem("fetch", JSON.stringify({fetch: true}));
  fetch("https://escrow-block.herokuapp.com/users/demo", {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  }).then(rs => {
    let d = rs.json();
  });
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
