import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import Heading from "./Heading";

const Appbar = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="m-1 p-1 rounded-md flex flex-row justify-between border-2 border-black">
      <div className="flex flex-row">
        <img src="/logo.png" className="w-10 h-10" alt="" />
        <Heading label={"Wallet Application"} />
      </div>
      <div className="p-1 m-1">
        Hello <Avatar name={user} />
        <button
          className="border-2 border-green-200"
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
