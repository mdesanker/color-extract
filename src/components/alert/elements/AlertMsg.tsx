import { FaCheck } from "react-icons/fa";

interface Props {
  msg: string;
}

const AlertMsg = ({ msg }: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 px-6 py-3 rounded-full bg-gray-700 opacity-90 shadow-md mb-2 text-sm">
      <div className="rounded-full p-1 bg-white">
        <FaCheck className="text-gray-700" />
      </div>
      <p className="text-white font-medium">{msg}</p>
    </div>
  );
};

export default AlertMsg;
