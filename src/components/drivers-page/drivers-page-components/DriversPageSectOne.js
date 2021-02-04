import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";


const useStyles = makeStyles((theme)=> ({
    driversSectOneRoot: {
        flexGrow: 1,
    },
    driversSectOnePaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        textAlign: 'left'
    },
    driversSectOnePaperContent: {
        margin: '10%',
    },
    driversSectOneImg: {
        width: '600px',
        height: '500px'
    }
}));

function DriversPageSectOne() {
    const  driversSectOneClasses = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Paper elevation={0} className={ driversSectOneClasses.driversSectOnePaper}>
                        <div className={ driversSectOneClasses. driversSectOnePaperContent}>
                            <h1>Deliver with Goodys</h1>
                                <div className="fake-list">
                                    <p>Your Schedule!</p>
                                    <p>Your Time!</p>
                                    <p>Your Money!</p>
                                </div>                
                            <p>
                                Now you can make money by delivering cannabis orders that people crave using the Goodys app - all while exploring your city.
                            </p>
                            <Button variant="outlined">Sign up</Button>
                        </div>
                        <img className={driversSectOneClasses.driversSectOneImg} src="https://thehappyogle.com/wp-content/uploads/2020/03/quarantine-cannabis-kit-coronavirus.jpg"/>
                    </Paper>  
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    )
}

export default DriversPageSectOne;

