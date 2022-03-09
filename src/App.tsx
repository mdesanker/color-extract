import React, { useState, useEffect } from "react";
import { usePalette } from "react-palette";
import "./App.css";
import FileUpload from "./components/fileUpload/FileUpload";
import ColorPanel from "./components/palette/ColorPanel";

const App = () => {
  const [image, setImage] = useState<any>(null);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    if (image) {
      setImageURL(URL.createObjectURL(image));
    }
  }, [image]);

  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) setImage(files[0]);
  };

  const { data } = usePalette(imageURL);
  console.log(data);

  const clearImageHandler = () => {
    setImage(null);
    setImageURL("");
  };

  const colorArray = [];
  for (let key of Object.keys(data)) {
    colorArray.push({
      color: data[key],
    });
  }

  return (
    <>
      <h1>Hello, world!</h1>
      <FileUpload
        fileUpload={fileUploadHandler}
        clearImage={clearImageHandler}
        image={image}
        imageURL={imageURL}
      />
      <ColorPanel colors={colorArray} />
    </>
  );
};

export default App;
