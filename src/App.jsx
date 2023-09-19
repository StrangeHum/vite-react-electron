import "./styles/App.scss";
import { HashRouter } from "react-router-dom";
import React from "react";

import Header from "./components/header/header.jsx";
import SHRoute from "./components/Routes.jsx";
import { SHLocation } from "./components/SHLocation";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <SHLocation />
        <SHRoute />
      </HashRouter>
    </>
  );
}

export default App;
