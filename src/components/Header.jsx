import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/header.css";

import LoggedIn from "./LoggedIn.jsx";
import SignUpBtn from "./SignUpBtn.jsx";
import SignInBtn from "./SignInBtn.jsx";

function Header(props) {
    return (

        <nav className="topnav">

            <NavLink className="nav-home" to="/"><i className="fa fa-home" style={{fontSize: "20px"}}></i></NavLink>

            {!props.loggedIn ? (<SignUpBtn/>) : (<></>)}

            {!props.loggedIn ? (<SignInBtn/>) : (<LoggedIn setLoggedIn={props.setLoggedIn}/>)}

        </nav>
    );
}

export default Header;