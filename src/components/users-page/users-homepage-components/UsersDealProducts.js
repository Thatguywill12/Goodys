import React from 'react'
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    dealProduct: {
        display: 'flex',
        width: '1000px',
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        ['@media (max-width:600px)']: { 
            flexDirection: 'column',
            width: '100%',
            height: '100%'
        }
    },
    productImg: {
        width: '600px',
        height: '400px',
        minWidth: '600px',
        minHeight: '400px',
        ['@media (max-width:600px)']: { 
            width: '100%',
            height: '100%',
            minWidth: '100%',
            minHeight: '100%',
        }
    },
    description: {
        padding: '50px',
        width: '40%',
        textAlign: 'left',
        ['@media (max-width:600px)']: { 
            width: '100%',
            padding: '0px'
        }
    },
    seeAllBtn: {
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        ['@media (max-width:600px)']: { 
            marginBottom: '20px'
        }
    }
}));

function UsersDealProducts() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.dealProduct}>
                <div className={classes.description}>
                    <h2>Deals</h2>
                    <p>Every deal available all in one spot</p>
                    <button className={classes.seeAllBtn}>See all</button>
                </div>
                <img className={classes.productImg} src='assets/img/product-deal.jpeg' alt='product-deal' />
            </div>
        </div>
    )
}

export default UsersDealProducts;