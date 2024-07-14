import { useState, useEffect } from "react";
import Card from "../components/Card";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
const Signin = () => {
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
      }, []);
  });

  return (
    <div>
      <Card>
        <Heading label={"Signin Page"} />
        <InputComponent />
      </Card>
    </div>
  );
};

function InputComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <>
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

      <Button
        label={"Sign in"}
        onClick={() => {
          axios
            .post(
              "https://wallet-backend-jxc7.onrender.com/api/v1/user/signin",
              {
                username: username,
                password: password,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then(async (res) => {
              localStorage.setItem("token", res.data.token);
              navigate("/dashboard");
            });
        }}
      />
      <Link to={"/signup"} className="underline">
        Signup page
      </Link>
    </>
  );
}

export default Signin;
