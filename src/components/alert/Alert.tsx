import { FaCheck } from "react-icons/fa";

interface Props {
  msg: string;
}

const Alert = ({ msg }: Props) => {
  return (
    <div className="flex items-center gap-4 border px-6 py-3 rounded-full bg-cyan-900 shadow-md my-2 text-sm sm:text-lg">
      <div className="rounded-full p-1 bg-white">
        <FaCheck className="text-cyan-900" />
      </div>
      <p className="text-white">{msg}</p>
    </div>
  );
};

export default Alert;
