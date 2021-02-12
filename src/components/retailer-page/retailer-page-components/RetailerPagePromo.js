import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    userRoot: {
        flexGrow: 1,
        marginBottom: '50px',
    },
    homeBodyContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: "100%",
        marginTop: '80px',
        height: '100%',
    },
    homeWelcomeImg: {
        marginTop: '50px',
        width: '1087px',
        height: '443px',
        [theme.breakpoints.down('sm')]: {
            height: '100%',
            width: '100%'
        }
    },
}));

function RetailerPagePromo() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.userRoot}>
                <Grid item className={classes.homeBodyContainer}>
                    <img className={classes.homeWelcomeImg} src="assets/img/users-hello.jpeg"/>
                </Grid>
            </Grid>
            <h1> Retailer Name </h1>
            <p> Retailers Data and Information </p>
        </div>
    )
}

export default RetailerPagePromo
