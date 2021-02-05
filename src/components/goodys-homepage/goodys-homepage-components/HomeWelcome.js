import React from 'react'
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    homeBodyRoot: {
        flexGrow: 1,
    },
    homeBodyContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: "100%"
    },
    homeWelcomeContent: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        position: 'absolute',
        top: '35%',
        ['@media (max-width:600px)']: { 
            top: '10%'
        }
    },
    homeWelcomeImg: {
        width: '100%',
        height: '719px',
        ['@media (max-width:600px)']: { 
            height: '100%'
        }
    },
    homeSearch: {
        width: '317px',
        height: '43px',
        borderRadius: '20px',
        border: 'none',
        outline: 'none',
        fontSize: '18px',
        paddingLeft: '10px',
    },
}));

function HomeWelcome() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.homeBodyRoot}>
                <Grid item className={classes.homeBodyContainer}>
                    <img className={classes.homeWelcomeImg} src="assets/img/home-background.jpeg"/>

                    <div className={classes.homeWelcomeContent}>
                        <input className={classes.homeSearch} type="text" placeholder="...Where should we deliver to?" size="35"/>
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default HomeWelcome
