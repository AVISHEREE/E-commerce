import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if(auth){
        navigate('/')
    }
  })

  const collectData = async () => {
    try {
        const data = await fetch("http://localhost:5000/user-registeration", {
          method: "POST",
          body: JSON.stringify({ name, email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await data.json();
        if(result.error){
            console.log(result);
            alert(result.error)
        }
        else{
            console.log(result);
            localStorage.setItem('user',result)
            navigate('/')
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
          placeholder="Enter your name"
        />
        <input
          className="inputBox"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          className="inputBox"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
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
