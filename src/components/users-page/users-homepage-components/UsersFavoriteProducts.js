import React from 'react'
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    favoriteProduct: {
        display: 'flex',
        width: '1000px',
        padding: '5%'
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

function UsersFavoriteProducts() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.favoriteProduct}>
                <div className={classes.description}>
                    
                    <h2>People's Favorite</h2>
                    <p>Top products rated by you all</p>
                    <button className={classes.seeAllBtn}>See all</button>
                </div>
                <img className={classes.productImg} src='assets/img/product-favorite.jpeg' alt='product-favorite' />
            </div>
        </div>
    )
}

export default UsersFavoriteProducts;