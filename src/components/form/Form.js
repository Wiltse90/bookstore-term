import { useState } from "react";
import React from "react";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import './style.css';

const Form = () => {
    const btnLog = <button type="button" onClick={() => {setAuth(Login); setBtn(btnSign); setMsg("Not a member? Register here.");}}>Login</button>;
    const btnSign = <button type="button" onClick={() => {setAuth(Signup); setBtn(btnLog); setMsg("Already a member? Log in here.");}}>Register</button>;

    const [userAuth, setAuth] = useState(Login);
    const [btnAuth, setBtn] = useState(btnSign);
    const [msg, setMsg] = useState("Not a member? Register here.");

    return (   

        <div className="authContainer">
        {userAuth}

        <div className="authMsg">{msg} {btnAuth}</div>
        
        </div>
    )
}

export default Form;