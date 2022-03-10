interface Props {
  color: string;
}

const ColorSwatch = ({ color }: Props) => {
  return (
    <>
      <div className="h-full w-1/6" style={{ backgroundColor: color }}></div>
      <p className="text-center hidden">{color}</p>
    </>
  );
};

export default ColorSwatch;
