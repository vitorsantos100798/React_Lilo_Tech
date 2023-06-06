import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-scroll";

export const Header = () => {
  const logo = require("../../assets/logo.png");

  const [selectedLink, setSelectedLink] = useState("home");

  const handleLinkClick = (link: any) => {
    setSelectedLink(link);
  };

  return (
    <div className="container">
      <div className="containerImg">
        <img style={{ width: 150, height: 130 }} src={logo} alt="Logo" />
      </div>
      <div className="containerList">
        <Link
          style={{
            color: selectedLink === "home" ? "#73c5ff" : "white",
            fontFamily: "Arial",
            fontWeight: "bolder",
            fontSize: "16px",
            cursor: "pointer",
          }}
          to="main"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </Link>
        <Link
          style={{
            color: selectedLink === "services" ? "#73c5ff" : "white",
            fontFamily: "Arial",
            fontWeight: "bolder",
            fontSize: "16px",
            cursor: "pointer",
          }}
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleLinkClick("services")}
        >
          Serviços
        </Link>
        <Link
          style={{
            color: selectedLink === "about" ? "#73c5ff" : "white",
            fontFamily: "Arial",
            fontWeight: "bolder",
            fontSize: "16px",
            cursor: "pointer",
          }}
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleLinkClick("about")}
        >
          Sobre
        </Link>
        <Link
          style={{
            color: selectedLink === "contact" ? "#73c5ff" : "white",
            fontFamily: "Arial",
            fontWeight: "bolder",
            fontSize: "16px",
            cursor: "pointer",
          }}
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleLinkClick("contact")}
        >
          Contatos
        </Link>
      </div>
    </div>
  );
};
