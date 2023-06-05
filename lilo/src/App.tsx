import React from "react";
import "./App.css";
import { Header } from "./screens/header";
import { Main } from "./screens/main";
import { Services } from "./screens/services";
import { CardAbout } from "./screens/cardAbout";
import { Contact } from "./screens/contact";
const App = () => {
  return (
    <div className="Background">
      <Header />
      <Main />
      <Services />
      <CardAbout />
      <Contact />
    </div>
  );
};

export default App;
