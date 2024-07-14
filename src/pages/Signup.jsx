import { useEffect, useState } from "react";
import Card from "../components/Card";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://wallet-backend-jxc7.onrender.com/api/v1/user/me", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(async (res) => {
        if (res.data.userId) {
          navigate("/dashboard");
        }
      });
  }, []);
  return (
    <div>
      <Card>
        <Heading label={"Signup Page"} />
        <InputBox
          label={"E-mail"}
          placeholder={"E mail here"}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <InputBox
          label={"Password"}
          placeholder={"password here"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <InputBox
          label={"First Name"}
          placeholder={"first name here"}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <InputBox
          label={"Last Name"}
          placeholder={"last name here"}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <Button
          label={"Sign Up"}
          onClick={() => {
            axios
              .post(
                "https://wallet-backend-jxc7.onrender.com/api/v1/user/signup",
                {
                  username,
                  password,
                  firstName,
                  lastName,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((res) => {
                if (!res.data.token) {
                  alert("user already exits");
                  
                } else {
                  localStorage.setItem("token", res.data.token);
                  navigate("/dashboard");
                }
              });
          }}
        />

        <Link to={"/signin"} className="underline">
          Signin
        </Link>
      </Card>
    </div>
  );
};

export default Signup;
