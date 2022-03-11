import { FaEraser } from "react-icons/fa";
import { useAppDispatch } from "../../store/hooks";
import { clearImage } from "../../store/slices/imageSlice";

const ResetBtn = () => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(clearImage());
  };

  return (
    <button
      className="flex items-center gap-4 px-4 py-2 border-2 border-black text-xl duration-200 hover:bg-gray-200 m-6"
      onClick={clickHandler}
    >
      <FaEraser />
      <p>Reset</p>
    </button>
  );
};

export default ResetBtn;
