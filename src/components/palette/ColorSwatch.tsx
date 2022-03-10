import { brightness } from "../../utils/Utils";

interface Props {
  color: string;
}

const ColorSwatch = ({ color }: Props) => {
  return (
    <>
      <div
        className="h-full w-1/6 cursor-pointer group"
        style={{ backgroundColor: color }}
      >
        <p
          className={`w-full h-full flex justify-center items-center text-center uppercase font-medium opacity-0 group-hover:opacity-100 ${
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
