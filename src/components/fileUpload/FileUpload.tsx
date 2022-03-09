import React, { useEffect, useState } from "react";

const FileUpload = () => {
  const [images, setImages] = useState<FileList | null>();
  const [imageURLs, setImageURLs] = useState<string[]>([]);

  useEffect(() => {
    if (images) {
      if (images.length === 0) return;
      const newImageUrls = [];
      for (let i = 0; i < images.length; i++) {
        newImageUrls.push(URL.createObjectURL(images[i]));
        console.log(URL.createObjectURL(images[i]));
      }
      setImageURLs(newImageUrls);
    }
  }, [images]);

  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.files);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <input
        type="file"
        // multiple
        accept="image/*"
        onChange={fileUploadHandler}
      />
    </div>
  );
};

export default FileUpload;
