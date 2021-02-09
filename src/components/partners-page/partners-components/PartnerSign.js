import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button, ButtonBase} from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import LaptopImage from "../img/partner-background.jpeg";
import { callbackify } from 'util';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${LaptopImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        height: '100vh',
        paddingTop: '60px'
    },
    transparent: {
        background: 'transparent'
    },
    description1: {
        fontSize: '60px',
        color: "white",
        fontWeight: '700',
        paddingRight: '90px',
        paddingLeft: '90px'
    },
    description2: {
        fontSize: '40px',
        color: "white",
        fontWeight: '500',
        paddingRight: '90px',
        paddingLeft: '90px'
    },
    signForm: {
        background: 'black',
        color: 'white',
        padding: '30px',
        fontSize: '30px',
        position: 'absolute',
        right: '50px',
        top: '120px',
        width: '400px'
    },
    signInput: {
        background: 'white',
        color: 'black',
        width: `calc(100% - 5px)`,
        marginTop: '2px',
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
    return (
        <div>
            <Grid container className={classes.container}>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.transparent}>
                        <p className={classes.description1}> A world of customers now within your reach </p>
                    </Paper>
                    <Paper elevation={0} className={classes.transparent} >
                        <p className={classes.description2}> Uber’s global platform gives you the flexibility, visibility and customer insights you need to connect with more customers. Partner with us today. </p>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={0} className={classes.signForm} >
                        <h6>Start with $0 marketplace fee for 15 days when using Uber delivery</h6>
                        <InputBase className={classes.signInput} placeholder="Dispensary Name" />
                        <InputBase className={classes.signInput} placeholder="Dispensary Address" />
                        <InputBase className={classes.signInput} placeholder="Floor/Suite Optional" />
                        <Grid container>
                            <Grid xs={6} spacing={5}> 
                                <InputBase className={classes.signInput} placeholder="first name" />
                            </Grid>
                            <Grid xs={6}> 
                                <InputBase className={classes.signInput} placeholder="last name" />
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
