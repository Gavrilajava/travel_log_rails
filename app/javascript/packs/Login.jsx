import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LoginForm from "../components/LoginForm";

document.addEventListener("DOMContentLoaded", () => {

  const rootElement = document.createElement("div")
  rootElement.className = 'container-fluid'
  render(
    <LoginForm />,
    document.body.appendChild(rootElement)
  );
});