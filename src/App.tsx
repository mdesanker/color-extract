import React, { useState, useEffect } from "react";
import { usePalette } from "react-palette";
import "./App.css";
import FileContainer from "./components/fileContainer/FileContainer";
import Header from "./components/header/Header";
import ColorPanel from "./components/palette/ColorPanel";

const App = () => {
  const [image, setImage] = useState<any>(null);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    if (image) {
      setImageURL(URL.createObjectURL(image));
    }
  }, [image]);

  const { data } = usePalette(imageURL);

  const colorArray = [];
  for (let key of Object.keys(data)) {
    colorArray.push({
      color: data[key],
    });
  }

  return (
    <>
      <Header />
      <FileContainer />
      {/* <ColorPanel colors={colorArray} /> */}
    </>
  );
};

export default App;
