import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import InputBox from "../components/InputBox";
import axios from "axios";
import UserComp from "../components/UserComp";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ id, setId }) => {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [me, setMe] = useState("default");
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://wallet-backend-jxc7.onrender.com/api/v1/user/me", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(async (res) => {
        if (!res.data.userId) {
          navigate("/signin");
        } else {
          setMe(res.data.user);
          setBalance(res.data.balance);
          setId(res.data.userId);
        }
      }, []);
  });
  useEffect(() => {
    axios
      .get("https://wallet-backend-jxc7.onrender.com/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);
  return (
    <div className="p-2 m-2">
      <Appbar user={me} />
      <div>Balance: {Math.round(balance * 100) / 100}</div>
      <div id="searchBar" className="m-2 border-t-2 border-black">
        <InputBox
          placeholder={"Search users here"}
          onChange={async (e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      Users:
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <UserComp user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
