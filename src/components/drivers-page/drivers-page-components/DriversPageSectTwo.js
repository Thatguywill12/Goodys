import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";


const useStyles = makeStyles((theme)=> ({
    driversSectTwoRoot: {
        flexGrow: 1,
    },
    driversSectTwoPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center'
    },
    driversSectTwoPaperContent: {
        margin: '10%',
    },
    driversSectTwoImg: {
        width: '200px',
        height: '200px'
    }
}));

function DriversPageSectTwo() {
    const  driversSectTwoClasses = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Paper elevation={0} className={ driversSectTwoClasses. driversSectTwoPaper}>
                        <div className={ driversSectTwoClasses. driversSectTwoPaperContent}>
                            <h1>What is Goodys</h1>
                            <p>
                                Available in over 4,000 cities in the U.S., Canada, and Australia, DoorDash is about connecting people with possibilities: bigger savings accounts, wider nets, stronger communities, and happier days. We empower local businesses and local drivers (called Dashers) with opportunities to earn, work, and live.
                                As a Dasher, you can be your own boss and enjoy the flexibility of choosing when, where, and how much you earn. All you need is a mode of transportation and a smartphone to start making money. It’s that simple.
                            </p>
                        </div>
                    </Paper>  
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    )
}

export default DriversPageSectTwo;

