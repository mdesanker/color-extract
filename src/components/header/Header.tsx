const Header = () => {
  return (
    <div className="w-9/10 p-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-black font-medium text-center mb-2">
        Color Extractor
      </h1>
      <p className="text-center text-gray-600">
        Upload an image to extract prominent colors in hex codes
      </p>
    </div>
  );
};

export default Header;
