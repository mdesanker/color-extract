import React, { useEffect, useState } from "react";
import { BsCardImage } from "react-icons/bs";

const FileUpload = () => {
  const [image, setImage] = useState<any>();
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

  return (
    <div className="h-60 w-9/10 max-w-[600px] bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
      <label
        htmlFor="select-image"
        className="w-full h-full rounded-lg bg-gray-100 p-6 border-dashed border-2 border-gray-300 flex flex-col justify-center items-center cursor-pointer"
      >
        <BsCardImage className="h-10 w-10 text-gray-400" />
        <p className="text-center text-gray-500">Select an image to process</p>
      </label>
      <input
        type="file"
        id="select-image"
        accept="image/*"
        className="hidden"
        onChange={fileUploadHandler}
      />
      {image && <img src={imageURL} alt={image.name} />}
    </div>
  );
};

export default FileUpload;
