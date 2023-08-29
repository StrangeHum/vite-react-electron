// import "./App.css";
//TODO: test
import "./styles/index.scss";
import { HashRouter, useLocation } from "react-router-dom";

import SHNavbar from "./components/Navbar.jsx";
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
        <div className="navbar">
          <SHNavbar />
        </div>
        <Foo />
        <SHRoute />
      </HashRouter>
    </>
  );
}

export default App;
