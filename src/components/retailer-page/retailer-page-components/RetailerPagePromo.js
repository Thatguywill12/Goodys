import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    userRoot: {
        flexGrow: 1,
        marginBottom: '50px',
        borderBottom: '1px solid',
    },
    homeBodyContainer: {
        display: 'flex',
        // justifyContent: 'flex-start',
        width: "100%",
        marginTop: '80px',
        height: '100%',
        marginLeft: '21%',
        // backgroundColor: 'red',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0px',
            marginLeft: '0px',
        }
    },
    homeWelcomeImg: {
        // marginTop: '50px',
        width: '137px',
        height: '100px',
        borderRadius: '100%',
        [theme.breakpoints.down('sm')]: {
            height: '100%',
            width: '100%'
        }
    },
    homeWelcomeInformation:{
        marginLeft: '20%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0px',
            padding: '30px',
        }
    },
    homeWelcomeDetails:{
        display: 'flex',
        flexDirection: 'flex',
        textAlign:'left',
        listStyle:'none',

    }
}));

function RetailerPagePromo() {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={0} className={classes.userRoot}>
                <Grid item className={classes.homeBodyContainer}>
                    <img className={classes.homeWelcomeImg} src='https://images.hytiva.com/Cana-Farms-4-X3-Logo.png'/>
                </Grid>
                <Grid item className={classes.homeWelcomeInformation}>
                    <div style={{textAlign:'left'}}>
                        <h1 style={{marginLeft:'7%'}}>Cana Farms</h1>
                        <div className={classes.homeWelcomeDetails}>
                            <ul>
                                <p>4.5</p>
                                <p>Storefront</p>
                                <p>Online & In-store purchases</p>
                            </ul>
                            <ul>
                                <p>Open until: 8:00pm</p>
                                <p>Licenses</p>
                                <p>Pick Up & Delivery Services</p>
                            </ul>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <h1> Retailer Name </h1>
            <p> Retailers Data and Information </p>
        </div>
    )
}

export default RetailerPagePromo
