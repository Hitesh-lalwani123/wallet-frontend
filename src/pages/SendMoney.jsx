import Card from "../components/Card";
import Heading from "../components/Heading";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";


const SendMoney = ({ id,setId }) => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const toid = searchParams.get("id");
  const name = searchParams.get("name");
  const baseURL ='https://wallet-backend-jxc7.onrender.com'

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
          setId(res.data.userId);
        }
      }, []);
  });

  return (
    <div>
      <Card>
        <Heading label={"Send Money"} />
        <div className="flex flex-row justify-center">
          <Avatar name={name} />
          {name}
        </div>
        <input
          className="border-2 border-gray-700 p-2 m-2"
          type="number"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <Button
          label={"Send Money"}
          onClick={(e) => {
            axios.post('https://wallet-backend-jxc7.onrender.com/api/v1/account/transfer',{
              to: toid,
              amount: amount
            },{
              headers:{
                'Content-Type':'application/json',
                'userid':id
              }
            }).then((res)=>{
              alert(res.data.message)
            })
          }}
        />
      </Card>
    </div>
  );
};

export default SendMoney;
