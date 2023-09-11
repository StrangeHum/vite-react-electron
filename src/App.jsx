import "./styles/App.scss";
import { HashRouter, useLocation } from "react-router-dom";

import Header from "./components/header/header.jsx";
import SHRoute from "./components/Routes.jsx";

function Foo() {
  const location = useLocation();
  console.log(location.pathname);
  return <span>Path : {location.pathname}</span>;
}

function Counter() {
  const n = 0;
  let count = n;
  return (
    <>
      <a>{count}</a>
      <button
        onClick={() => {
          count += 1;
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          count = n;
        }}
      >
        обнулить
      </button>
      <button
        onClick={() => {
          count -= 1;
        }}
      >
        -
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Foo />
        <SHRoute />
      </HashRouter>
    </>
  );
}

export default App;
