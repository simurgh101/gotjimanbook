import "./App.css";
import React from "react";
import Navbars from "./Navbars";
import Home from "./RandomGif/Home";

const App = () => {
  return (
      <div className="App">
        <Navbars/>
        <Home/>
      </div>
  );
};

export default App;
