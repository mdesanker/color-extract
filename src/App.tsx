import React from "react";
import "./App.css";
import FileUpload from "./components/fileUpload/FileUpload";
import ColorSwatch from "./components/palette/ColorSwatch";

const App = () => {
  return (
    <>
      <h1>Hello, world!</h1>
      <FileUpload />
      <ColorSwatch color="#cfb4a3" />
    </>
  );
};

export default App;
