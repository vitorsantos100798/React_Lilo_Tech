import React from "react";
import "./App.css";
import { Header } from "./screens/header";
import { Main } from "./screens/main";
import { Services } from "./screens/services";
const App = () => {
  return (
    <div className="Background">
      <Header />
      <Main />
      <Services />
    </div>
  );
};

export default App;
