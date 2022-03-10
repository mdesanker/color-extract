import { brightness } from "../../utils/Utils";

interface Props {
  color: string;
}

const ColorSwatch = ({ color }: Props) => {
  return (
    <>
      <div
        className="h-full w-1/6 cursor-pointer"
        style={{ backgroundColor: color }}
      >
        <p
          className={`w-full h-full flex justify-center items-center text-center uppercase ${
            brightness(color.slice(1)) > 125 ? "text-black" : "text-white"
          }`}
        >
          {color.slice(1)}
        </p>
      </div>
    </>
  );
};

export default ColorSwatch;
