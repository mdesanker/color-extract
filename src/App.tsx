import React from "react";
import "./App.css";
import FileUpload from "./components/fileUpload/FileUpload";
import ColorPanel from "./components/palette/ColorPanel";
import ColorSwatch from "./components/palette/ColorSwatch";

const App = () => {
  return (
    <>
      <h1>Hello, world!</h1>
      <FileUpload />
      <ColorPanel />
    </>
  );
};

export default App;
