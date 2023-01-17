import React, {useEffect, useState} from 'react'
import {Route, Routes} from "react-router";
import "./styles/styles.css";

import loginFacade from "./utils/loginFacade.js";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

import cphbusinesslogo from "./images/cphbusinesslogo.png"

function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if (loginFacade.getToken()) setLoggedIn(true);
    }, []);

    return (
        <div className="main">
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="signin" element={!loggedIn ? <SignIn setLoggedIn={setLoggedIn} /> : <Home loggedIn={loggedIn} />}/>
                <Route path="signup" element={<SignUp />}/>

                <Route path="*" element={<h1>Page Not Found!!!</h1>}/>


            </Routes>

            <footer className="container">
                &copy;Copyright 2022 | <a
                href="https://www.cphbusiness.dk/"
                target="_blank"
                rel="noreferrer noopener"
            >cphbusiness</a>
                <p className="footer-right">
                    <img src={cphbusinesslogo} width="175px" height="30px"/>
                </p>
            </footer>

        </div>
    )
}

export default App
