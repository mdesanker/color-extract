import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

const FilePreview = () => {
  const { image, imageURL } = useAppSelector((state: RootState) => state.image);

  return (
    <img src={imageURL} alt={image} className="h-full w-full object-contain" />
  );
};

export default FilePreview;
