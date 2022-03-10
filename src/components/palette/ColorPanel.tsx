import ColorSwatch from "./ColorSwatch";

const ColorPanel = ({ colors }: any) => {
  return (
    <div className="w-9/10 max-w-[500px] h-28 border rounded-3xl shadow-lg flex overflow-hidden">
      {colors &&
        colors.map((color: any) => {
          return <ColorSwatch color={color.color} />;
        })}
    </div>
  );
};

export default ColorPanel;
