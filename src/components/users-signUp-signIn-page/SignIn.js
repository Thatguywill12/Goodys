import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import ajaxUrl from '../../config/ajaxUrl';


function SignIn() {
    //Sets use state for User
    const [username, setUsername] = useState("");
    //Sets use state for Email
    const [email, setEmail] = useState("");
    //Sets use state for Password
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //Error Handling for the Email
    const [emailError, setEmailError] = useState("");
    //Error Handling for the Password
    const [passwordError, setPasswordError] = useState("");
    //Toggles between SignIn & SignUp
    const [hasAccount, setHasAccount] = useState(false);

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    const history = useHistory();

    const handleLogin = () => {
        console.log(username, password, email);
        if (username === '' && email === '') return false;
        fetch(`${ajaxUrl}/sign_in?username=${username}&password=${password}&email=${email}`, options).then(res=>res.json().then(data=>{
            console.log(data);
            if(data['sign_in']){
                history.push('/');
            } else {
                alert('Username or password is incorrect.');
            }
        }));
    }

    const handleSignup = () => {
        if (username === '' || email === '' || password === '') {
            alert('Fill in the required');
            return false;
        } 

        if (password !== confirmPassword) {
            alert('confirm password');
            return;
        }

        fetch(`${ajaxUrl}/sign_up?username=${username}&password=${password}&email=${email}`, options).then(res=>res.json().then(data=>{
            console.log(data);
            if(data['sign_up']){
                history.push('/');
            }
        }));
        history.push('/');
    }
    
    return (
        <div>
            <Login
                username={username}
                setUsername={setUsername}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                setConfirmPassword={setConfirmPassword}
            />
        </div>
    )
}

export default SignIn
