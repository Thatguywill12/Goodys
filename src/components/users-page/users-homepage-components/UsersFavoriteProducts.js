import React from 'react'
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    favoriteProduct: {
        display: 'flex',
        // width: '10px',
        // padding: '5%',
        marginBottom: '10%',
        ['@media (max-width:600px)']: { 
            flexDirection: 'column',
            width: '100%',
            height: '100%'
        }
    },
    productImg: {
        width: '600px',
        height: '400px',
        // minWidth: '600px',
        // minHeight: '400px',
        borderRadius: '6%',
        ['@media (max-width:768px) and (max-height: 1024px)']: {
            width: '55%',
            height: '115%',
            minWidth: '30%',
            minHeight: '100%',
            borderRadius: '6%' 
        },
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
        ['@media (max-width:768px) and (max-height: 1024px)']: {
            padding: '15px',
            width: '40%',
            textAlign: 'left',  
        },
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

function UsersFavoriteProducts() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.favoriteProduct}>
                <div className={classes.description}>
                    
                    <h2>People's Favorite</h2>
                    <p>Top products rated by you all</p>
                    <Link to="/users-general-product-page"><button className={classes.seeAllBtn}>See all</button></Link>
                </div>
                <img className={classes.productImg} src='assets/img/product-favorite.jpeg' alt='product-favorite' />
            </div>
        </div>
    )
}

export default UsersFavoriteProducts;