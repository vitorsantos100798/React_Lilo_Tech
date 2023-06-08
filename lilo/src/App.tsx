import React from "react";
import "./App.css";
import { Header } from "./screens/header";
import { Main } from "./screens/main";
import { Services } from "./screens/services";
import { CardAbout } from "./screens/cardAbout";
import { Contact } from "./screens/contact";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="Background">
      <Header />
      <Element name="main">
        <Main />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      {/* <Element name="about">
        <CardAbout />
      </Element> */}
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default App;
