interface Props {
  color: string;
}

const ColorSwatch = ({ color }: Props) => {
  return (
    <div className="flex flex-col gap-1 p-2">
      <div
        className={`h-20 w-20 border border-gray-400 shadow-md`}
        style={{ backgroundColor: color }}
      ></div>
      <p className="text-center">{color}</p>
    </div>
  );
};

export default ColorSwatch;
