import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { timedAlert } from "../../store/slices/alertSlice";
import { brightness } from "../../utils/Utils";
import { FaCheck } from "react-icons/fa";

interface Props {
  color: string;
}

const ColorSwatch = ({ color }: Props) => {
  const dispatch = useAppDispatch();

  const hexCode = color.slice(1);

  const [checkVisible, setCheckVisible] = useState(false);

  const clickHandler = () => {
    navigator.clipboard.writeText(hexCode);
    setCheckVisible(true);
    // dispatch(timedAlert("Color copied to clipboard!"));
  };

  const mouseLeaveHandler = () => {
    setCheckVisible(false);
  };

  return (
    <>
      <div
        className="h-full grow cursor-pointer group  sm:hover:w-1/4"
        style={{ backgroundColor: color }}
        onClick={clickHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <div
          className={`w-full h-full flex justify-center items-center  opacity-0 group-hover:opacity-100 ${
            brightness(hexCode) > 125 ? "text-black" : "text-white"
          }`}
        >
          {checkVisible ? (
            <FaCheck className="text-2xl mx-2" />
          ) : (
            <p className="hidden sm:block font-medium uppercase text-center">
              {hexCode}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ColorSwatch;
