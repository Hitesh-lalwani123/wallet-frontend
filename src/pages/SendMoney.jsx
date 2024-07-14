import Card from "../components/Card";
import Heading from "../components/Heading";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";


const SendMoney = ({ id,setId }) => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const toid = searchParams.get("id");
  const name = searchParams.get("name");
  const [loading,setLoading] = useState(false);
  const [label,setLabel] = useState();
  
  const [balance, setBalance] = useState(0);

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
          setBalance(res.data.balance)
        }
      }, []);
  });

  return (
    <div>
      <Card>
        <div id="balance">Your Account balance is: {Math.round(balance*100)/100}</div>
        <Heading label={"Send Money"} />
        <div className="flex flex-row justify-center">
          <Avatar name={name} />
          {name}
        </div>
        <input
          className="border-2 border-gray-700 p-2 m-2"
          placeholder="Enter amount to be sent"
          type="number"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        {loading? <Loading/> : null}
        <div>{label}</div>
        <Button
          label={"Send Money"}
          onClick={(e) => {
            setLoading(true);
            axios.post('https://wallet-backend-jxc7.onrender.com/api/v1/account/transfer',{
              to: toid,
              amount: amount
            },{
              headers:{
                'Content-Type':'application/json',
                'userid':id
              }
            }).then((res)=>{
              
              setLoading(false);
              {console.log(res.data.transfer)}

              {res.data.transfer ? setLabel('Transfer Successful'): setLabel('Insufficient Balance')}
            })
          }}
        />
      </Card>
    </div>
  );
};

export default SendMoney;
