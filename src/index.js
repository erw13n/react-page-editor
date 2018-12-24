import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout/Layout";

import "./styles.css";

function App() {
  return <Layout />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
