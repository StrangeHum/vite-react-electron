import "./styles/App.scss";
import { HashRouter } from "react-router-dom";

import Header from "./components/header/header.tsx";
import { Pages } from "./components/Pages.tsx";
import { SHLocation } from "./components/SHLocation.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <SHLocation />
        <Pages />
      </HashRouter>
    </>
  );
}

export default App;
