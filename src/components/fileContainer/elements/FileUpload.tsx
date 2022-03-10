import { BsCardImage } from "react-icons/bs";
import { useAppDispatch } from "../../../store/hooks";
import { loadImage } from "../../../store/slices/imageSlice";

const FileUpload = () => {
  const dispatch = useAppDispatch();

  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      dispatch(loadImage(files[0]));
    }
  };

  return (
    <label
      htmlFor="select-image"
      className={`w-full h-[300px] rounded-lg bg-gray-100 p-6 border-dashed border-2 border-gray-300 flex flex-col justify-center items-center cursor-pointer`}
    >
      <BsCardImage className="h-16 w-16 text-gray-400" />
      <p className="text-center text-gray-500">Select an image to process</p>
      <input
        type="file"
        id="select-image"
        accept="image/*"
        className="hidden"
        onChange={fileUploadHandler}
      />
    </label>
  );
};

export default FileUpload;
