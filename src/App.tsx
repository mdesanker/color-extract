import React from "react";
import "./App.css";
import Alerts from "./components/alert/Alerts";
import Dropzone from "./components/dropzone/Dropzone";
import Header from "./components/header/Header";
import ColorPanel from "./components/palette/ColorPanel";
import ResetBtn from "./components/reset/ResetBtn";

const App = () => {
  return (
    <>
      <Header />
      <Dropzone />
      <ColorPanel />
      <ResetBtn />
      <Alerts />
    </>
  );
};

export default App;
