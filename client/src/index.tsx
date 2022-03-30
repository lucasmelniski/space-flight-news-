import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";

ReactDOM.render(
  <React.StrictMode>
    <Container fluid>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
