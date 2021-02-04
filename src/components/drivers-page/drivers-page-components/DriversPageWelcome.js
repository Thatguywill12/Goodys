import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles((theme)=> ({
    driversRoot: {
        flexGrow: 1
    },
    driversWelPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        margin: '10%',
        color: 'white',
        textAlign: 'left'
    },
    driversWelPaperContent: {
        margin: '10%',
    },
    driversJoinUsImg: {
        width: '400px',
        height: '350px'
    }
}));

function DriversPageWelcome() {
    const driversWelcomeClasses = useStyles();
    return (
        <div>
            <Grid container spacing={3} className = {driversWelcomeClasses.driversRoot}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Paper className={driversWelcomeClasses.driversWelPaper}>
                        <div>
                            <img className = {driversWelcomeClasses.driversJoinUsImg} src="https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ?ch=Width,DPR&w=640"/>
                        </div>
                        <div className={driversWelcomeClasses.driversWelPaperContent}>
                            <h1>Deliver what people want</h1>
                            <h3>We are creating new ways to support you</h3>
                            <p>As a Dasher, you can be your own boss and enjoy the flexibility of choosing when, where, and how much you earn. All you need is a mode of transportation and a smartphone to start making money. It’s that simple.</p>
                        </div>   
                    </Paper>  
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    )
}

export default DriversPageWelcome
