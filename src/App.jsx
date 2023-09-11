import "./styles/App.scss";
import { HashRouter, useLocation } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/header.jsx";
import SHRoute from "./components/Routes.jsx";

function Foo() {
  const location = useLocation();
  console.log(location.pathname);
  return <span>Path : {location.pathname}</span>;
}

function Counter() {
  const val = 0;
  const [count, setCount] = useState(val);

  return (
    <>
      <a>{count}</a>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(val);
        }}
      >
        обнулить
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
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
        <Counter />
      </HashRouter>
    </>
  );
}

export default App;
