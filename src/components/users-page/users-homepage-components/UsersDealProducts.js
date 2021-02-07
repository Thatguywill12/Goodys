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
        paddingRight: '5%'
    },
    productImg: {
        width: '600px',
        height: '400px',
        minWidth: '600px',
        minHeight: '400px'
    },
    description: {
        padding: '50px',
        width: '40%',
        textAlign: 'left'
    },
    seeAllBtn: {
        padding: '10px',
        border: 'none',
        borderRadius: '5px'
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