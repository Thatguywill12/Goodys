import React, { useState, useEffect } from "react";
import Login from "./Login";


function SignIn() {
    //Sets use state for User
    const [user, setUser] = useState("");
    //Sets use state for Email
    const [email, setEmail] = useState("");
    //Sets use state for Password
    const [password, setPassword] = useState("");
    //Error Handling for the Email
    const [emailError, setEmailError] = useState("");
    //Error Handling for the Password
    const [passwordError, setPasswordError] = useState("");
    //Toggles between SignIn & SignUp
    const [hasAccount, setHasAccount] = useState(false);
    
    return (
        <div>
            <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
            />
        </div>
    )
}

export default SignIn
