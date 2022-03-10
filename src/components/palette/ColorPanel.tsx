import { usePalette } from "react-palette";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import ColorSwatch from "./ColorSwatch";
import { v4 as uuidv4 } from "uuid";

const ColorPanel = () => {
  const { imageURL } = useAppSelector((state: RootState) => state.image);

  const { data } = usePalette(imageURL);

  const colors = [];
  for (let key of Object.keys(data)) {
    colors.push({
      color: data[key],
    });
  }

  return (
    <div className="w-9/10 max-w-[500px] h-28 border rounded-3xl shadow-lg flex overflow-hidden">
      {colors &&
        colors.map((color: any) => {
          return <ColorSwatch key={uuidv4()} color={color.color} />;
        })}
    </div>
  );
};

export default ColorPanel;
