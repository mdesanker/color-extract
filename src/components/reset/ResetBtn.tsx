import { BiEraser } from "react-icons/bi";
import { useAppDispatch } from "../../store/hooks";
import { clearImage } from "../../store/slices/imageSlice";

const ResetBtn = () => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(clearImage());
  };

  return (
    <button
      className="flex items-center justify-center gap-4 px-6 py-4 border-2 border-gray-300 rounded-full text-xl text-black duration-200 font-medium m-6 hover:border-black"
      onClick={clickHandler}
    >
      <BiEraser className="h-8 w-8" />
      <p>Clear</p>
    </button>
  );
};

export default ResetBtn;
