import React from "react";
import {useNavigate} from "react-router";

function SignInBtn() {
    const navigate = useNavigate()

    return (
        <div className="login-container">
            <button onClick={() => navigate("/signin")}>LOGIN</button>
        </div>
    );
}

export default SignInBtn;