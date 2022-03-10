import React from "react";
import { useAppSelector } from "../../store/hooks";
import FilePreview from "./elements/FilePreview";
import FileUpload from "./elements/FileUpload";

const FileContainer = () => {
  const { imageURL } = useAppSelector((state) => state.image);

  return (
    <div className="w-9/10 max-w-[500px] flex flex-col justify-center items-center">
      <div className="w-full h-[300px] flex justify-center items-center gap-2">
        {imageURL ? <FilePreview /> : <FileUpload />}
      </div>
    </div>
  );
};

export default FileContainer;
