import React from "react";
import "./styles.css";
export const Header = () => {
  const logo = require("../../assets/logo.png");
  return (
    <>
      <div className="container">
        <div className="containerImg">
          <img style={{ width: 150, height: 130 }} src={logo} />
        </div>
        <div className="containerList">
          <p>Home</p>
          <p>Serviços</p>
          <p>Sobre</p>
          <p>Contatos</p>
        </div>
      </div>
    </>
  );
};
