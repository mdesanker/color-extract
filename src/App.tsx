import React from "react";
import "./App.css";
import Alert from "./components/alert/Alert";
import FileContainer from "./components/fileContainer/FileContainer";
import Header from "./components/header/Header";
import ColorPanel from "./components/palette/ColorPanel";

const App = () => {
  return (
    <>
      <Header />
      <FileContainer />
      <ColorPanel />
      <Alert msg="Color copied to the clipboard!" />
    </>
  );
};

export default App;
