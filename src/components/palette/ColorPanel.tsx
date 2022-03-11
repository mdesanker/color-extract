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
    <>
      {imageURL && (
        <div className="w-9/10 max-w-[500px] h-28 rounded-xl flex overflow-hidden mt-4">
          {colors &&
            colors.map((color: any) => {
              return <ColorSwatch key={uuidv4()} color={color.color} />;
            })}
        </div>
      )}
    </>
  );
};

export default ColorPanel;
