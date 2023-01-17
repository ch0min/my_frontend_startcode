import React from "react";
import {useNavigate} from "react-router";
import loginFacade from "../utils/loginFacade.js";

export default function LoggedIn(props) {
    const navigate = useNavigate()

    const logout = () => {
        loginFacade.logout()
        props.setLoggedIn(false)
        navigate("/")
        alert("You are now logged out")
    }

    return (
        <div className="login-container">
            <button onClick={logout}>LOG OUT</button>
        </div>
    )

}