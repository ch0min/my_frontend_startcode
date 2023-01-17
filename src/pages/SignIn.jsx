import React, {useState} from 'react';
import {useNavigate} from "react-router";
import loginFacade from "../utils/loginFacade.js";

import "../styles/styles.css";

function SignIn(props) {
    const navigate = useNavigate();

    const init = {username: "", password: ""};
    const [loginCredentials, setLoginCredentials] = useState(init);
    const [error, setError] = useState("")

    const performLogin = (evt) => {
        evt.preventDefault();
        login(loginCredentials.username, loginCredentials.password);
    }

// Exception messages
    const login = (user, pass) => {
        loginFacade.login(user, pass)
            .then(() => props.setLoggedIn(true))
            .catch(async err => {
                if (err.status) {
                    setError(await err.fullError.then(e => e.message))
                    err.fullError.then(e => console.log(e.message))
                }
            })
    }

    const handleOnChange = (evt) => {
        setLoginCredentials({...loginCredentials, [evt.target.id]: evt.target.value})
        console.log(loginCredentials)
    }

    const handleSignUp = () => {
        navigate("/signup")
    }

    return (
        <div className="signin">
            <form onChange={handleOnChange}>
                <h2>Sign In</h2>
                <p>_________________________________________</p>
                <label htmlFor="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" id="username"/>{" "}
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" id="password"/>
                <p><font color="#DC143C">{error}</font></p>
                <button className="signin-btn" onClick={performLogin} type="submit">Login</button>
            </form>
            <p>_________________________________________</p>
            <form>
                <p className="signup-p">Don't have an account yet? Sign up now!</p>
                <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignIn;