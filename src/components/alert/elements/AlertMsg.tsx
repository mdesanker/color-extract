import { FaCheck } from "react-icons/fa";

interface Props {
  msg: string;
}

const AlertMsg = ({ msg }: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 px-6 py-3 rounded-full bg-cyan-900 shadow-md mb-2 text-sm">
      <div className="rounded-full p-1 bg-white">
        <FaCheck className="text-cyan-900" />
      </div>
      <p className="text-white">{msg}</p>
    </div>
  );
};

export default AlertMsg;
