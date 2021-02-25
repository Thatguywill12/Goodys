import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import OrderRetailer from './cart-page-components/OrderRetailer';
import OrderTotal from './cart-page-components/OrderTotal';
import OrderSummery from './cart-page-components/OrderSummery';
import { Grid } from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import MenuNav from '../menu-nav/MenuNav';



const useStyles = makeStyles((theme) => ({
    orderContainer:{
        marginTop: '12%',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        // alignItems:'center',
        width: '97%',
        height: '100vh',
        marginLeft: '1.5%'
        // backgroundColor: 'red'
    },
    leftContainer:{
        width:'67%',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'flex-start',
        // marginLeft: '1%',
        // backgroundColor: 'green',
        // marginTop: '-8.8%'
        // display: 'flex',
        // flexDirection: 'column'
    },
    rightContainer:{
        width: '31%',

        // backgroundColor: 'blue'
        
    }
}))

function Cart() {
    const classes = useStyles();
    return (
        <div>
            <MenuNav />
            <div className={classes.orderContainer}>
                <div className={classes.leftContainer}>
                    <OrderRetailer/>
                    <OrderSummery/>
                </div>
                <div className={classes.rightContainer}>
                    <OrderTotal/>
                </div>
            </div>
            
        </div>
    )
}

export default Cart
