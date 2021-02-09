import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button, ButtonBase} from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import LaptopImage from "../img/partner-ease.jpeg";
import { callbackify } from 'util';

const useStyles = makeStyles((theme) => ({
    container: {
        background: 'white',
        minHeight: '100vh',
    },
    section: {
        maxHeight: '500px'
    },
    partnerFitTitle: {
        textAlign: 'left',
        paddingLeft: '150px',
        marginTop: '100px',
        marginBottom: '100px',
        fontSize: '20px',
    },
    fitItem: {
        paddingTop: '10px',
        paddingLeft: '100px',
        paddingRight: '100px',
        minHeight: '300px',
    },
    fitItemTitle: {
        fontSize: '25px',
    },
    fitItemDesc: {
        fontSize: '20px',
    },
    partnerEaseImg: {
        width: '60%',
        height: '70%',
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

function PartnerFit() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.partnerFitTitle}> 
                <h1> Why partner with Goodys? </h1>
            </div>
            <Grid container className={classes.section}>
                <Grid item xs={4} className={classes.fitItem}>
                    <Paper elevation={0} >
                        <h3 className={classes.fitItemTitle}> 
                            Deliver your way
                        </h3>
                        <p className={classes.fitItemDesc}> 
                            Our offerings are flexible so you can customize them to your needs. Get started with your delivery people or ours.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={4} className={classes.fitItem}>
                    <Paper elevation={0} >
                        <h3  className={classes.fitItemTitle}> 
                            Boost your visibility
                        </h3>
                        <p className={classes.fitItemDesc}> 
                            Stand out with in-app marketing to reach even more customers and increase sales.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={4} className={classes.fitItem}>
                    <Paper elevation={0}>
                        <h3 className={classes.fitItemTitle}> 
                            Connect with customers
                        </h3>
                        <p className={classes.fitItemDesc}> 
                            Turn customers into regulars with actionable data insights, respond to reviews or offer a loyalty program.
                        </p>
                    </Paper>
                </Grid>
            </Grid>
            
            <Grid container className={classes.section}> 
                <Grid item xs={4} className={classes.fitItem}>
                    <Paper elevation={0} >
                        <h3 className={classes.fitItemTitle}> 
                            Manage it all with ease
                        </h3>
                        <p className={classes.fitItemDesc}> 
                            Turn customers into regulars with actionable data insights, respond to reviews or offer a loyalty program.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={8}> 
                    <img className={classes.partnerEaseImg} src={LaptopImage} />   
                </Grid>
            </Grid>
        </div>
    )
}

export default PartnerFit
