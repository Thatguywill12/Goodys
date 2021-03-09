import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Login from "./Login";
import ajaxUrl from '../../config/ajaxUrl';
import CircularProgress from '@material-ui/core/CircularProgress';
//import { classes } from "istanbul-lib-coverage";

const useStyles = makeStyles((theme) => ({
    spin: {
        position: 'fixed',
        width: '100px !important',
        height: '100px !important',
        top: 'calc(50vh - 50px)',
        left: 'calc(50vw - 50px)',
    }
}));

function SignIn({dispatchToStore}) {

    const classes = useStyles();

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

    const [signProcess, setSignProcess] = useState(false);

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
        setSignProcess(true);
        fetch(`${ajaxUrl}/sign_in?username=${username}&password=${password}&email=${email}`, options).then(res=>res.json().then(data=>{
            console.log(data);
            if(data['sign_in']){
                dispatchToStore('sign_in', {username, password, email});
                history.push('/');
            } else {
                alert('Username or password is incorrect.');
            }
            setSignProcess(false);
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
        setSignProcess(true);
        fetch(`${ajaxUrl}/sign_up?username=${username}&password=${password}&email=${email}`, options).then(res=>res.json().then(data=>{
            console.log(data);
            if(data['sign_up']){
                dispatchToStore('sign_in', {username, password, email});
                history.push('/');
            }
            setSignProcess(false);
        }));
    }
    
    return (
        <div>
            {signProcess?(
                <CircularProgress className={classes.spin} />
            ):(
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
            )}
        </div>
    )
}

const dispatchToStore = (type, signedUser) => {
    if (type == 'sign_in' ) {
        return {
            type: 'SIGN_IN',
            signedUser: signedUser
        }
    }
    return {};
}

export default connect(null, {dispatchToStore})(SignIn);
