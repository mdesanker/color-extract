import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";

const FilePreview = () => {
  const { image, imageURL } = useAppSelector((state: RootState) => state.image);

  return (
    <>
      {imageURL && (
        <img
          src={imageURL}
          alt={image}
          className="h-full w-full object-contain bg-gray-50 border-dashed border-2 border-gray-300 rounded-lg"
        />
      )}
    </>
  );
};

export default FilePreview;