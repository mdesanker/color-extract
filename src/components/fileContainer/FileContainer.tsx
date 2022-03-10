import React from "react";
import { useAppSelector } from "../../store/hooks";
import FilePreview from "./elements/FilePreview";
import FileUpload from "./elements/FileUpload";

const FileContainer = ({ fileUpload, clearImage }: any) => {
  const { imageURL } = useAppSelector((state) => state.image);

  return (
    <>
      <div className="w-9/10 max-w-[500px] h-[300px] flex flex-col justify-center items-center gap-2">
        {imageURL ? <FilePreview /> : <FileUpload />}
        <button
          className="text-cyan-700 px-8 py-1 duration-150 hover:underline"
          onClick={clearImage}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default FileContainer;
