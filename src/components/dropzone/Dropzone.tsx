import React from "react";
import Dropzone from "react-dropzone";
import { BsCardImage } from "react-icons/bs";

const DropZone = () => {
  const dropHandler = (acceptedFiles: any) => {
    console.log(acceptedFiles);
  };

  return (
    <Dropzone onDrop={dropHandler} accept="image/*" multiple={false}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div
          {...getRootProps()}
          className="w-9/10 max-w-[600px] h-[300px] rounded-lg bg-gray-100 p-6 border-dashed border-2 border-gray-300 flex flex-col justify-center items-center cursor-pointer"
        >
          <input {...getInputProps()} />
          <BsCardImage className="h-16 w-16 text-gray-400" />
          <p className="text-center text-gray-500">
            {isDragActive
              ? "Drop file here"
              : "Drop image here or click to browse"}
          </p>
        </div>
      )}
    </Dropzone>
  );
};

export default DropZone;
