import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: 'blue',
        width: '100%',
        height: '53%',
        marginLeft: '1%'
    },
    card:{
        width: '100%',
        height: '100%'
    }
    // totalContainer:{
    //     // backgroundColor:'blue'
    // },
    // subtotal : {
    //     width: '60%',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    //     borderBottom: '1px solid black',
    //     marginLeft: '50%',
    //     transform: 'translateX(-50%)',
    // },
    // taxes: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    //     borderBottom: '1px solid black',
    //     marginLeft: '50%',
    //     transform: 'translateX(-50%)',
    // },
    // total:{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    //     borderBottom: '1px solid black',
    //     marginLeft: '50%',
    //     transform: 'translateX(-50%)',
    // },
    // disclaimer:{
    //     display: 'flex',
    //     width:'70%',
    //     marginLeft: '50%',
    //     transform: 'translateX(-50%)',
    //     textAlign:'center'
    // },
    // btn:{
    //     width:'70%',
    //     marginLeft: '50%',
    //     transform: 'translateX(-50%)',
    // }

}))
function OrderTotal() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <div className={classes.totalContainer}>
                    <div className={classes.subtotal}>
                        <h3>Subtotal<span>(2 items)</span></h3>
                        <p>$70.00</p>
                    </div>
                    <div className={classes.taxes}>
                        <p>Est. taxes & fees</p>
                        <p>$0.00</p>
                    </div>
                    <div className={classes.total}>
                        <p>Order Total</p>
                        <p>$70.00</p>
                    </div>
                    <div className={classes.disclaimer}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusantium asperiores aspernatur itaque ?</p>
                    </div>
                    <Button variant="outlined" className={classes.btn}>Proceed to checkout</Button>
                </div>
            </Card>            
        </div>
    )
}

export default OrderTotal
