import React from "react";

const Login = () => {
    return (
        <form className="frmLogin">
        <h1>Login</h1>
        <label for="uname">Username:</label><br/>
        <input type="text" id="uname" name="uname"/><br/>
        <label for="password">Password:</label><br/>
        <input type="text" id="password" name="password"/><br/><br/>
        <input type="submit" value="Submit"/>
        </form>
    )
}

export default Login;