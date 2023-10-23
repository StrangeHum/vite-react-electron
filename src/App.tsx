import "./styles/App.scss";
import { HashRouter } from "react-router-dom";

// import Header from "./components/header/header.tsx";
// import { Pages } from "./components/Pages.tsx";
// import { SHLocation } from "./components/SHLocation.tsx";

// import { RightSideTest } from "./components/RightSideTest";
// import { Script, SHAction } from "types/scriptTypes";

import { TodoList } from "./components/TodoList";

function App() {
  // const action: SHAction = {
  //   name: "tt",
  //   action: "ee",
  // };

  // const script: Script = {
  //   name: "Start",
  //   arrayActions: [action],
  // };
  return (
    <>
      <HashRouter>
        <TodoList title="text" list={["1", "2", "3"]} />
        <TodoList title="Valyu" list={["react", "vite"]} />
        {/* <Header /> */}
        {/* <SHLocation /> */}
        {/* <Pages /> */}

        {/* <RightSideTest /> */}
      </HashRouter>
    </>
  );
}

export default App;
