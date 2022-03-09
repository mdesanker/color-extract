import React, { useState } from "react";

const FileUpload = () => {
  const [images, setImages] = useState<FileList | null>(null);

  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.files);
    console.log(e.target.files);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={fileUploadHandler}
      />
    </div>
  );
};

export default FileUpload;
