import React, { useEffect, useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { usePalette } from "react-palette";

const FileUpload = () => {
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

  const processImageHandler = () => {
    console.log("Processing colors...");
  };

  const clearImageHandler = () => {
    setImage(null);
    setImageURL("");
  };

  return (
    <div className="w-9/10 max-w-[600px] bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
      <div className="h-[400px] w-full flex flex-col justify-center items-center">
        <label
          htmlFor="select-image"
          className={`w-full h-[400px] rounded-lg bg-gray-100 p-6 border-dashed border-2 border-gray-300 flex flex-col justify-center items-center cursor-pointer ${
            imageURL ? "hidden" : ""
          }`}
        >
          <BsCardImage className="h-10 w-10 text-gray-400" />
          <p className="text-center text-gray-500">
            Select an image to process
          </p>
          <input
            type="file"
            id="select-image"
            accept="image/*"
            className="hidden"
            onChange={fileUploadHandler}
          />
        </label>
        {image && (
          <img
            src={imageURL}
            alt={image.name}
            className="h-full w-full object-contain bg-gray-50 border-dashed border-2 border-gray-300 rounded-lg"
          />
        )}
      </div>
      <div className="flex flex-col items-center pt-2">
        <button
          className="text-white bg-cyan-700 border-2 border-cyan-700 rounded-lg px-8 py-1 duration-150 hover:bg-white hover:text-cyan-700 disabled:bg-gray-300 disabled:border-gray-300 disabled:hover:bg-gray-300 disabled:hover:text-white"
          onClick={processImageHandler}
          disabled={image ? false : true}
        >
          Process
        </button>
        <button
          className="text-cyan-700 px-8 py-1 duration-150 hover:underline"
          onClick={clearImageHandler}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
