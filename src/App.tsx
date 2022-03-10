import React from "react";
import "./App.css";
import Alerts from "./components/alert/Alerts";
import FileContainer from "./components/fileContainer/FileContainer";
import Header from "./components/header/Header";
import ColorPanel from "./components/palette/ColorPanel";

const App = () => {
  return (
    <>
      <Header />
      <FileContainer />
      <ColorPanel />
      <Alerts />
    </>
  );
};

export default App;
