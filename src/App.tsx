import "./styles/App.scss";
import { HashRouter } from "react-router-dom";

// import Header from "./components/header/header.tsx";
// import { Pages } from "./components/Pages.tsx";
// import { SHLocation } from "./components/SHLocation.tsx";

import { Script, SHAction } from "types/scriptTypes";
import { Scripts } from "./components/scripts-page/Scripts";

function App() {
  const action: SHAction = {
    name: "tt",
    action: "ee",
  };

  const script: Script = {
    name: "Start",
    arrayActions: [action],
  };
  //
  return (
    <>
      <HashRouter>
        {/* <Header />
        <SHLocation />
        <Pages /> */}

        <Scripts script={script} />
      </HashRouter>
    </>
  );
}

export default App;
