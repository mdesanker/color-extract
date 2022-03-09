import ColorSwatch from "./ColorSwatch";

const ColorPanel = () => {
  const colors: Record<string, string> = {
    vibrant: "#4a62fc",
    lightVibrant: "#7690fa",
    darkVibrant: "#443c94",
    muted: "#ac745c",
    lightMuted: "#cfb4a3",
    darkMuted: "#685768",
  };

  const colorArray = [];
  for (let key of Object.keys(colors)) {
    colorArray.push({
      color: colors[key],
    });
  }

  console.log(colorArray);

  return (
    <div className="flex items-center gap-2">
      {colorArray &&
        colorArray.map((color) => {
          return <ColorSwatch color={color.color} />;
        })}
    </div>
  );
};

export default ColorPanel;
