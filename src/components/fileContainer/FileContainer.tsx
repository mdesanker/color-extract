import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearImage } from "../../store/slices/imageSlice";
import FilePreview from "./elements/FilePreview";
import FileUpload from "./elements/FileUpload";

const FileContainer = () => {
  const { imageURL } = useAppSelector((state) => state.image);
  const dispatch = useAppDispatch();

  const clearImageHandler = () => {
    dispatch(clearImage());
  };

  return (
    <div className="w-9/10 max-w-[500px] flex flex-col justify-center items-center">
      <div className="w-full h-[300px] flex justify-center items-center gap-2">
        {imageURL ? <FilePreview /> : <FileUpload />}
      </div>
      <button
        className="text-cyan-700 px-8 py-1 duration-150 hover:underline"
        onClick={clearImageHandler}
      >
        Reset
      </button>
    </div>
  );
};

export default FileContainer;
