import React from "react";
import { Link } from "react-router-dom";
// import Shimage from "/brow-icon.svg";

function Navbar() {
  return (
    <React.Fragment>
      {/* <Shimage viewBox="0 0 512 512" width="100px" height="100px" /> */}
      <h1>hi</h1>
      <Link to="main-menu">Главное меню</Link>
      <Link to="settings">Настройки</Link>
      <Link to="scripts">Сценарии</Link>
      <Link to="global-events">Глобальные события</Link>
    </React.Fragment>
  );
}
export default Navbar;
