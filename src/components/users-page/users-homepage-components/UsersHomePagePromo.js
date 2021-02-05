import React from 'react'
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    userRoot: {
        flexGrow: 1,
    },
    homeBodyContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: "100%"
    },
    homeWelcomeImg: {
        marginTop: '50px',
        width: '1087px',
        height: '443px',
        ['@media (max-width:600px)']: { 
            height: '100%'
        }
    },
}));

function UsersHomePagePromo() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.userRoot}>
                <Grid item className={classes.homeBodyContainer}>
                    <img className={classes.homeWelcomeImg} src="assets/img/users-hello.jpeg"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default UsersHomePagePromo
