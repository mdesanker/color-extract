const Header = () => {
  return (
    <div className="w-9/10 p-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-slate-700 text-center mb-2">
        Color Extractor
      </h1>
      <p className="text-xl text-slate-500 text-center">
        Upload an image to extract colors
      </p>
    </div>
  );
};

export default Header;
