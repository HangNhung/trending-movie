import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "regenerator-runtime/runtime";
import "./styles/tailwind.css";

const appElement = document.getElementById("app");

ReactDOM.render(<App />, appElement);
