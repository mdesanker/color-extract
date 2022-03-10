import { useAppDispatch } from "../../store/hooks";
import { timedAlert } from "../../store/slices/alertSlice";
import { brightness } from "../../utils/Utils";

interface Props {
  color: string;
}

const ColorSwatch = ({ color }: Props) => {
  const dispatch = useAppDispatch();

  const hexCode = color.slice(1);

  const clickHandler = () => {
    navigator.clipboard.writeText(hexCode);
    dispatch(timedAlert("Color copied to clipboard!"));
  };

  return (
    <>
      <div
        className="h-full w-1/6 cursor-pointer group"
        style={{ backgroundColor: color }}
        onClick={clickHandler}
      >
        <p
          className={`w-full h-full flex justify-center items-center text-center uppercase font-medium opacity-0 group-hover:opacity-100 ${
            brightness(hexCode) > 125 ? "text-black" : "text-white"
          }`}
        >
          {hexCode}
        </p>
      </div>
    </>
  );
};

export default ColorSwatch;
