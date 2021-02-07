import React from 'react'
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#e1e1e1',
        padding: '50px'
    },
    productImg: {
        width: '250px',
        height: '250px',
        margin: "-20px"
    },
    description: {
        width: "500px",
        fontSize: "20px",
        fontWeight: "600",
        ['@media (max-width:600px)']: { 
            width: '100%',
        }
    }
}));

function UsersMeetBuddy() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1>Meet Buddy</h1>
            <img className={classes.productImg} src='assets/img/meet-buddy.png' alt='meet-buddy' />
            <p className={classes.description} >Meet Buddy your personal guide to help find what product works for you! Buddys here to help you learn about the different cannabis products and help you find the best options!</p>
        </div>
    )
}

export default UsersMeetBuddy;