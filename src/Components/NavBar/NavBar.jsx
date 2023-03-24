import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <h1>Nike OnLine</h1>
      <nav>
        <ul>
          <li>Colecciones</li>
          <li>Nike Journal</li>
          <li>Snakers</li>
          <li>Tiendas</li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
