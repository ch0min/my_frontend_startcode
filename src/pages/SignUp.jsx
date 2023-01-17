import React, {useState} from 'react';
import {useNavigate} from "react-router";

import userFacade from "../utils/userFacade.js";

function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const initUser = {userName: "", userEmail: "", userPass: ""};
    const [userInput, setUserInput] = useState(initUser);

    const atSymbol = "@"
    //Checks for numbers in string
    function containsNumber(str) {
        return /[0-9]/.test(str);
    }

    const performSignUp = (evt) => {
        evt.preventDefault();

        // Email needs "@" to become valid.
        if (!userInput.userEmail.includes(atSymbol)) {
            alert("Please enter a valid email address")
            return
        }
        if (!containsNumber(userInput.userPass)) {
            alert("Password must contain at least one number")
            return
        }
        signUp(userInput.userName, userInput.userEmail, userInput.userPass);
    }

    const signUp = (user, email, password) => {
        userFacade.createUser(user, email, password)
            .then(() => navigate("/"))
            .catch(async err => {
                if (err.status) {
                    setError(await err.fullError.then(e => e.message))
                    err.fullError.then(e => console.log(e.message))
                }
            })
    }

    const handleOnChange = (evt) => {
        setUserInput({...userInput, [evt.target.id]: evt.target.value})
    }

    return (
        <div className="signup">
            <form onChange={handleOnChange}>
                <h2>Sign Up</h2>
                <p>_________________________________________</p>
                <label htmlFor="username"><b>Username<font color="#DC143C">*</font></b></label>
                <input type="text" placeholder="Enter Username" name="username" id="userName"/>

                <label htmlFor="email"><b>Email<font color="#DC143C">*</font></b></label>
                <input type="text" placeholder="Enter Email" name="name" id="userEmail"/>

                <label htmlFor="password"><b>Password<font color="#DC143C">*</font></b></label>
                <input type="password" placeholder="Enter Password" id="userPass"/>

                <p><font color="#DC143C">{error}</font></p>
                <button className="signup-btn" onClick={performSignUp} type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;