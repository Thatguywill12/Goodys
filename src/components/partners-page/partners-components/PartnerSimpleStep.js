import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import stepImg1 from '../img/step1.jpeg';
import stepImg2 from '../img/step2.jpeg';
import stepImg3 from '../img/step3.jpeg';

const useStyles = makeStyles((theme) => ({
    container: {
        background: 'white',
        minHeight: '50vh',
        background: 'black',
        paddingTop: '50px',
        marginTop: '50px',
    },
    section: {
        maxHeight: '500px',
    },
    SignUpTitle: {
        marginBottom: '100px',
        fontSize: '20px',
        color: 'white',
    },
    signItem: {
        paddingTop: '10px',
        paddingLeft: '100px',
        paddingRight: '100px',
        minHeight: '300px',
    },
    simpleImg: {
        width: '80%',
        height: '80%',
        borderRadius: '10px',
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

function PartnerSimpleStep() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.SignUpTitle}> 
                <h1> 3 Simple Steps To Sign Up</h1>
            </div>
            <Grid container className={classes.section}>
                <Grid item xs={4} className={classes.signItem}>
                    <img className={classes.simpleImg} src={stepImg1} />
                </Grid>
                <Grid item xs={4} className={classes.signItem}>
                    <img className={classes.simpleImg} src={stepImg2} />
                </Grid>
                <Grid item xs={4} className={classes.signItem}>
                    <img className={classes.simpleImg} src={stepImg3} />
                </Grid>
            </Grid>
            
        </div>
    )
}

export default PartnerSimpleStep
