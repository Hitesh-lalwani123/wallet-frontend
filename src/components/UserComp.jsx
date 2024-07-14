import { useNavigate } from "react-router-dom";
import Button from "./Button";

const UserComp = ({user}) => {

  const navigate = useNavigate();

  return (
    <div className="bg-gray-300 w-full m-2 p-2 flex justify-between">
      <div>
        {user.firstName} {user.lastName}
      </div>
      <Button label={"Send Money"} onClick={(e)=>{
        navigate('/sendMoney?id=' + user._id + '&name=' + user.firstName)
      }}/>
    </div>
  );
};

export default UserComp;
