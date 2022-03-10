import React from "react";
import Dropzone from "react-dropzone";

const DropZone = () => {
  const dropHandler = (acceptedFiles: any) => {
    console.log(acceptedFiles);
  };

  return (
    <Dropzone onDrop={dropHandler} accept="image/*" multiple={false}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drop image here or click to browse</p>
        </div>
      )}
    </Dropzone>
  );
};

export default DropZone;
