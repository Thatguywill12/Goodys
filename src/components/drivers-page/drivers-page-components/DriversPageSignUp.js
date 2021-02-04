import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme)=> ({
    driversSignUpPaperRoot: {
        flexGrow: 1,
    },
    driversSignUpPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        margin: '10%',
        color: 'white',
        textAlign: 'left'
    },
    driversSignUpPaperPaperContent: {
        margin: '10%',
        backgroundColor: 'black'
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        margin: '10%',
        listStyle: 'none',
        textDecoration: 'none'
    },
    list:{
        listStyle: 'none',
        textDecoration: 'none',
    }
}));

function DriversPageSignUp() {
   
        const driversSignUpClasses = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Paper className={driversSignUpClasses.driversSignUpPaper}>
                        <div className="sign-up-details-header">
                            <h2>Sign up details</h2>
                        </div>
                        <div className={driversSignUpClasses.listContainer}>
                            <ul className={driversSignUpClasses.list}>
                                <li>18 or older</li>
                                <li>Any car, scooter, or bicycle(in select cities)</li>
                                <li>Driver's license number</li>
                                <li>Social security number (only in United States)</li>
                                <li>Final Step: consent to a background check</li>

                            </ul>

                            <ul className={driversSignUpClasses.list}>
                                <li>Submit application</li>
                                <li>Choose driver orientation</li>
                                <li>Complete sign up</li>
                                <li>Get the app and go</li>
                            </ul>
                        </div>
                    </Paper>  
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    )
}

export default DriversPageSignUp;


