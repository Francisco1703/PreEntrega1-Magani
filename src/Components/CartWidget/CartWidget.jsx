import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  const imgCarrito =
    "https://electrogar.com.ar/wp-content/uploads/2020/04/carro-de-compras.png";

  return (
    <div>
      <img className="imgCarrito me-3" src={imgCarrito} alt="Imagen carrito" />
      <strong className="me-3">1</strong>
    </div>
  );
};

export default CartWidget;
