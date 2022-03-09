import ColorSwatch from "./ColorSwatch";

const ColorPanel = ({ colors }: any) => {
  return (
    <div className="flex items-center gap-2">
      {colors &&
        colors.map((color: any) => {
          return <ColorSwatch color={color.color} />;
        })}
    </div>
  );
};

export default ColorPanel;
