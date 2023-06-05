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
            color: selectedLink === "home" ? "#0061A5" : "white",
            fontFamily: "Arial",
            fontWeight: "bolder",
            fontSize: "16px",
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
            color: selectedLink === "services" ? "#0061A5" : "white",
            fontFamily: "Arial",
            fontWeight: "bolder",
            fontSize: "16px",
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
            color: selectedLink === "about" ? "#0061A5" : "white",
            fontFamily: "Arial",
            fontWeight: "bolder",
            fontSize: "16px",
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
            color: selectedLink === "contact" ? "#0061A5" : "white",
            fontFamily: "Arial",
            fontWeight: "bolder",
            fontSize: "16px",
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
