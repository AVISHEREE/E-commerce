import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    try {
      const data = await fetch("http://localhost:5000/v1/user/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await data.json();
      if (result.error) {
        console.log(result);
        alert(result.error);
      } else {
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
      }
    } catch (e) {
      console.log(`Error in registeration ${e}`);
    }
  };
  return (
    <>
      <div className="body">
        <h1>Register yourself</h1>
        <input
          className="inputBox"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter your name"
        />
        <input
          className="inputBox"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email"
        />
        <input
          className="inputBox"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your password"
        />
        <button className="signUpBtn" onClick={collectData}>
          Sign Up
        </button>
      </div>
    </>
  );
};

export default SignUp;
