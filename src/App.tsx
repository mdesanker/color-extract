import React from "react";
import "./App.css";
import FileContainer from "./components/fileContainer/FileContainer";
import Header from "./components/header/Header";
import ColorPanel from "./components/palette/ColorPanel";

const App = () => {
  return (
    <>
      <Header />
      <FileContainer />
      <ColorPanel />
    </>
  );
};

export default App;
