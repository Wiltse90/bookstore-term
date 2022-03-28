import React from "react";

const Signup = () => {
    return (
        <>
        <form className="frmSignup">
        <h1>Register</h1>
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname"/><br/>
        <label for="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname"/><br/>
        <label for="uname">Username:</label><br/>
        <input type="text" id="uname" name="uname"/><br/>
        <label for="password">Password:</label><br/>
        <input type="text" id="password" name="password"/><br/><br/>
        <input type="submit" value="Submit"/>
        </form> 
        </>
    )
}

export default Signup;