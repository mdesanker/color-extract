import React from "react";
import { BsCardImage } from "react-icons/bs";
import { useAppDispatch } from "../../store/hooks";
import { loadImage, setImage } from "../../store/slices/imageSlice";

const FileUpload = ({ fileUpload, clearImage, image, imageURL }: any) => {
  const dispatch = useAppDispatch();

  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      dispatch(loadImage(files[0]));
    }
  };

  return (
    <>
      <div className="w-9/10 max-w-[500px] h-[300px] flex flex-col justify-center items-center">
        <label
          htmlFor="select-image"
          className={`w-full h-[300px] rounded-lg bg-gray-100 p-6 border-dashed border-2 border-gray-300 flex flex-col justify-center items-center cursor-pointer ${
            imageURL ? "hidden" : ""
          }`}
        >
          <BsCardImage className="h-16 w-16 text-gray-400" />
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
          className="text-cyan-700 px-8 py-1 duration-150 hover:underline"
          onClick={clearImage}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default FileUpload;
