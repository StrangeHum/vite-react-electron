// import "./App.css";
//TODO: test
import { HashRouter, useLocation } from "react-router-dom";

import Header from "./components/header/Header.jsx";
import SHRoute from "./components/Routes.jsx";

function Foo() {
  const location = useLocation();
  console.log(location.pathname);
  return <span>Path : {location.pathname}</span>;
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
