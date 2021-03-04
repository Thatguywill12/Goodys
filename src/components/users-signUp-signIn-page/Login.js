import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    root:{
        minWidth: 500,
        minHeight: 500,
        ['@media (max-width:850px)']: { 
            minWidth: 350,
        },

    },
    oAuth:{
        display: 'flex',
        flexDirection: 'column'
    },
    oAuthBtn:{
        marginBottom:'10%'
    },
    inputBoxes:{
        width: '223px',
        height:'25px',
        ['@media (max-width:850px)']: { 
            width:'220px',
        },
    },
    loginContainer:{
        borderRadius: "10px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "15%",
        padding: "10px",
    }
});

const Login = (props) => {
    const classes = useStyles();


    const {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (
        <section
            className="login"
            style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            backgroundColor: "#F4F3F3",
            }}
        >
        <h1>Goodys</h1>
        <Card className={classes.root}> 
            <div className="btnContainer">
                {!hasAccount ? (
                    <>
                        <div
                            className={classes.loginContainer}
                        >
                        {/* Username Label, input, and error message */}
                        <label>Username</label>
                        <input
                        type="text"
                        autoFocus
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={classes.inputBoxes}
                        />
                        <p className="errorMsg">{emailError}</p>
                        
                        {/* Users password label, input, and error message  */}
                        <label>Password</label>
                        <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={classes.inputBoxes}

                        />
                        <p className="errorMsg">{passwordError}</p>

                        <p style={{marginTop:'-5%'}}>Or</p>

                        {/* Google and Facebook oAuth link */}
                        <div className={classes.oAuth}>
                            <Button variant="outlined" className={classes.oAuthBtn} startIcon={<GTranslateIcon/>}>Sign In With Google </Button>
                            <Button variant="outlined" className={classes.oAuthBtn} startIcon={<FacebookIcon/>}>Sign In With Facebook </Button>
                        </div>
                        <div className="btnContainer"></div> 
                        {/*<Link to ='/users-home-page'>*/}
                            <Button
                                variant="outlined"
                                style={{ position: "relative" }}
                                onClick={()=>handleLogin()}
                            >
                                Sign in
                            </Button>
                        {/*</Link>*/}
                        <p>
                            Don't have an account?
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                        </p>
                    </div>
                    </>
                ) : (
                    <>
                        <div
                            className={classes.loginContainer}
                        >
                            {/* Username Label, input, and error message */}
                            <label>Username</label>
                            <input
                                type="text"
                                autoFocus
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={classes.inputBoxes}
                            />
                            <p className="errorMsg">{emailError}</p>

                            <label>Email</label>
                            <input
                                type="text"
                                autoFocus
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={classes.inputBoxes}
                            />
                            <p className="errorMsg">{emailError}</p>
                            
                            {/* Users password label, input, and error message  */}
                            <label>Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={classes.inputBoxes}
                            />
                            <p className="errorMsg">{passwordError}</p>

                            <label>Confirm Password</label>
                            <input
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={classes.inputBoxes}

                            />
                            <p className="errorMsg">{passwordError}</p>

                            

                            <p style={{marginTop:'-5%'}}>Or</p>

                            {/* Google and Facebook oAuth link */}
                            <div className={classes.oAuth}>
                                <Button variant="outlined" className={classes.oAuthBtn} startIcon={<GTranslateIcon/>}>Sign Up With Google </Button>
                                <Button variant="outlined" className={classes.oAuthBtn} startIcon={<FacebookIcon/>}>Sign Up With Facebook </Button>
                            </div>
                            <div className="btnContainer"></div> 
                            {/*<Link to ='/users-home-page'>*/}
                                <Button
                                    variant="outlined"
                                    style={{ position: "relative",}}
                                    onClick={()=>handleSignup()}
                                >
                                    Sign up
                                </Button>
                            {/*</Link>*/}
                            <p>
                                Already have an account?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                        </div>
                    </>
                )}
            </div>
            {/* </div> */}
        </Card>
    </section>
    )
};

export default Login;

