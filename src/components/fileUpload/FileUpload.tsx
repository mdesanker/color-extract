import React, { useEffect, useState } from "react";

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
    <div className="bg-white rounded-lg shadow-lg p-6">
      <input
        type="file"
        id="select-image"
        accept="image/*"
        onChange={fileUploadHandler}
      />
      {image && <img src={imageURL} alt={image.name} />}
    </div>
  );
};

export default FileUpload;
