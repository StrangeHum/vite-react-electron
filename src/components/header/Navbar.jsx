import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="main-menu">Главное меню</Link>
      <Link to="settings">Настройки</Link>
      <Link to="scripts">Сценарии</Link>
      <Link to="global-events">Глобальные события</Link>
    </>
  );
}
export default Navbar;
