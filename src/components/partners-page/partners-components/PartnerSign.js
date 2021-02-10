import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button, ButtonBase} from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import LaptopImage from "../img/partner-background.jpeg";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${LaptopImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        height: '100vh',
        paddingTop: '60px',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        }
    },
    transparent: {
        background: 'transparent'
    },
    description1: {
        fontSize: '60px',
        color: "white",
        fontWeight: '700',
        paddingRight: '90px',
        paddingLeft: '90px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px',
            marginTop: '100px',
            paddingRight: '10px',
            paddingLeft: '10px',
        }
    },
    description2: {
        fontSize: '40px',
        color: "white",
        fontWeight: '500',
        paddingRight: '90px',
        paddingLeft: '90px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px',
            marginTop: '50px',
            paddingRight: '10px',
            paddingLeft: '10px',
        }
    },
    signForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'black !important',
        color: 'white',
        padding: '30px',
        fontSize: '30px',
        position: 'absolute',
        right: '50px',
        top: '120px',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0px',
            paddingTop: '20px',
            paddingRight: '0px',
            paddingBottom: '15px',
            left: '100%',
            top: '0px',
            width: '100%',
            zIndex: 6,
        }
    },
    signToggleBtn: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'initial',
            position: 'fixed',
            right: '10px',
            top: '60px',
            zIndex: '7',
            border: 'solid thin black',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
        }
    },
    showForm: {
        [theme.breakpoints.down('sm')]: {
            left: '0px',
            position: 'fixed',
            top: '50px',
            height: '100%',
            transition: 'left .3s ease-in-out',
        }
    },
    hideForm: {
        [theme.breakpoints.down('sm')]: {
            top: '50px',
            left: '100%',
            height: '100%',
            position: 'fixed',
            transition: 'left .3s ease-in-out',
        }
    },
    rightArrow: {
        width: '30px',
    },
    leftArrow: {
        width: '30px',
        transform: 'rotate(180deg)',
    },
    signInput: {
        background: 'white',
        color: 'black',
        width: `calc(100% - 30px)`,
        marginTop: '7px',
        marginLeft: '2px',
        marginRight: '2px',
        paddingLeft: '20px'
    },
    signNameHolder: {
        width: `calc(100% - 28px)`,
        marginBottom: '3px',
    },
    signNameInput: {
        background: 'white',
        color: 'black',
        marginLeft: '2px',
        marginRight: '2px',
        paddingLeft: '20px'
    },
    submitBtn: {
        background: '#353535',
        fontSize: '20px',
        padding: '5px',
        borderRadius: '5px',
        marginTop: '10px',
        width: '100px'
    },
    h: {
        color: 'black',
        fontSize: '28px',
        fontStyle: 'bold',
        marginBottom: '0px',
        ['@media (max-width:600px)']: { 
        color: 'red'
        }
    }
}));

function PartnerSign() {
    const classes = useStyles();
    const [ifShowForm, setCount] = useState(false);
    
    return (
        <div>
            <ButtonBase className={classes.signToggleBtn} onClick={()=>{setCount(!ifShowForm)}}>
                Sign<br></br>
                <img src='assets/img/arrow-right.svg' className={ifShowForm?classes.rightArrow:classes.leftArrow}/>
            </ButtonBase>
            <Grid container className={classes.container}>
                <Grid item md={8}>
                    <Paper elevation={0} className={classes.transparent}>
                        <p className={classes.description1}> A world of customers now within your reach </p>
                    </Paper>
                    <Paper elevation={0} className={classes.transparent} >
                        <p className={classes.description2}> Uber’s global platform gives you the flexibility, visibility and customer insights you need to connect with more customers. Partner with us today. </p>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} className={`${classes.signForm} ${ifShowForm?classes.showForm:classes.hideForm}`} >
                        <h6>Start with $0 marketplace fee for 15 days when using Uber delivery</h6>
                        <InputBase className={classes.signInput} placeholder="Dispensary Name" />
                        <InputBase className={classes.signInput} placeholder="Dispensary Address" />
                        <InputBase className={classes.signInput} placeholder="Floor/Suite Optional" />
                        <Grid container className={classes.signNameHolder}>
                            <Grid xs={6} spacing={5}> 
                                <InputBase className={classes.signNameInput} placeholder="first name" />
                            </Grid>
                            <Grid xs={6}> 
                                <InputBase className={classes.signNameInput} placeholder="last name" />
                            </Grid>
                        </Grid>
                        <InputBase className={classes.signInput} placeholder="Email" />
                        <InputBase className={classes.signInput} placeholder="Mobile Number" />
                        <InputBase className={classes.signInput} placeholder="Number of Locations" />
                        <InputBase className={classes.signInput} placeholder="Type of Dispensary" />
                        <ButtonBase className={classes.submitBtn}>Submit</ButtonBase>
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default PartnerSign
