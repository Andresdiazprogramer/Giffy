import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import {useLocation} from 'wouter'
import './Login.css'


export default function Login({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [,navigate] = useLocation()
  const {isLoginLoading,hasLoginError,login, isLogged} = useUser()

  useEffect(()=>{
    if (isLogged ) {
      navigate('/')
      onLogin && onLogin()
    }
  },[isLogged, navigate, onLogin])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({username,password})
  }
  

    return (
      <>
        {isLoginLoading && <span>Checking credentials...</span>}
        {!isLoginLoading &&
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Username
                <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                />
            </label>
            <label>
                password
                <input 
                type="password" 
                placeholder="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </label>
            <button className="btn">Login</button>
        </form>
        }
        {
          hasLoginError && <strong>Credentials are invalid...</strong>
        }
      </>
    );
}
