import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link className="link" to="main-menu">
        Главное меню
      </Link>
      <Link className="link" to="settings">
        Настройки
      </Link>
      <Link className="link" to="scripts">
        Сценарии
      </Link>
      <Link className="link" to="global-events">
        Глобальные события
      </Link>
    </>
  );
}
export default Navbar;
/* 
        <Link to="main-menu">Главное меню</Link>
      
      
        <Link to="settings">Настройки</Link>
      
      
        <Link to="scripts">Сценарии</Link>
      
      
        <Link to="global-events">Глобальные события</Link>
       */
