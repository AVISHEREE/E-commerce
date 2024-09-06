import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
          navigate('/')
        }
      })
    const collectData = async () =>{
        const data = await fetch("http://localhost:5000/v1/user/login",{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers: {
                "Content-Type": "application/json",
              }
        })
    let result = await data.json()
    console.log(result);
    if(result.error){
        alert(result.error)
    }
    
    localStorage.setItem('user',JSON.stringify(result.user))
    localStorage.setItem('auth',JSON.stringify(result.auth))
    navigate('/')
    
    }
    return(
        <>
        <div className="body">
          <h1>Login yourself</h1>
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
          <button className="sigInBtn" onClick={collectData}>
            Sign In
          </button>
        </div>
      </>
    );
}

export default Login;