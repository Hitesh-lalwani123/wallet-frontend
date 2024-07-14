import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import Heading from "./Heading";

const Appbar = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="m-1 p-1 rounded-md flex flex-row justify-between border-2 border-black">
      <div className="flex flex-row">
        <img src="/logo.png" className="w-8 h-8" alt="" />
        <Heading label={"Wallet Application"} />
      </div>
      <div className="flex flex-row">
        <div className="bg-neutral-300 text-black h-8 w-14 rounded-full font-bold flex flex-row justify-center mr-2">
          {user[0].toUpperCase()}
        </div>
        <button
          className="bg-slate-900 hover:bg-slate-700 text-white h-8 w-14 rounded-md font-thin"
          onClick={(e) => {
            localStorage.removeItem("token");
            navigate("/signin");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Appbar;
