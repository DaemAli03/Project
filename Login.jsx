import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {
      name,
      email,
      password
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.success === true) {
        alert("Login Successful");
        navigate('/home');
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Login Failed");
    });
  }

  return (
    <>
      <div className="loginsSignup">
        <form className="loginSignup-container" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="loginSignup-fields">
            <input type='text' placeholder='Your Name' value={name} onChange={e => setName(e.target.value)} />
            <input type='email' placeholder='Your Email' value={email} onChange={e => setEmail(e.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit">Continue</button>
          <p className="loginSignup-login">Already have an account <span>Login here</span></p>
          <div className="loginSignup-agree">
            <input type='checkbox' name='' id='' />
            <p>By continuing i agree to the terms and policies</p>
          </div>
        </form>
      </div>
    </>
  )
}
