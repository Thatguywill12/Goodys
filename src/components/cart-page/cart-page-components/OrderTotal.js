import React from 'react';
import { useState } from 'react';
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { MappingsContext } from 'source-list-map';


const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: 'blue',
        width: '100%',
        height: '53%',
        marginLeft: '1%',
        ['@media (max-width:600px)']: { 
            marginLeft: '0',
            paddingBottom: '20px',
        }
    },
    card:{
        width: '100%',
        height: '100%',
        ['@media (max-width:600px)']: { 
        }
    },
    totalContainer:{
        // backgroundColor:'blue'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ['@media (max-width:600px)']: { 
        }
    },
    subtotal : {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottom: '1px solid black',
    },
    taxes: {
        display: 'flex',
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottom: '1px solid black',
    },
    total:{
        display: 'flex',
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottom: '1px solid black',
    },
    disclaimer:{
        display: 'flex',
        width: '60%',
        width:'70%',
        textAlign:'center',
        ['@media (max-width:600px)']: { 
            display: 'none',
        }
    },
    btn:{
        width:'70%',
        margin: '20px',
    },
    fullShow: {
        ['@media (max-width:600px)']: { 
            display: 'initial',
        }
    },
    collapseShow: {
        ['@media (max-width:600px)']: { 
            display: 'none',
        }
    },
    toggleShow: {
        color: 'blue',
        display: 'none',
        ['@media (max-width:600px)']: { 
            display: 'initial'
        }
    }
}))

function OrderTotal({state}) {
    const classes = useStyles();
    const products = state.myCart!=null?[...state.myCart]:[];

    let calc = () => {
        return products.reduce((sum, item)=>(sum + item.countOf * item.price), 0);
    }

    const [totalFullShow, setTotalFullShow] = useState(false);

    let toggleShow = () => {
        setTotalFullShow(!totalFullShow);
    }

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <div className={classes.totalContainer}>
                    <div className={classes.info}> 
                        <div className={classes.subtotal}>
                            <h3>Subtotal<span>(2 items)</span></h3>
                            <p>${calc()}</p>
                        </div>
                        <div className={classes.taxes + ' ' + (totalFullShow?classes.fullShow:classes.collapseShow)}>
                            <p>Est. taxes & fees</p>
                            <p>$0.00</p>
                        </div>
                        <div className={classes.total + ' ' + (totalFullShow?classes.fullShow:classes.collapseShow)}>
                            <p>Order Total</p>
                            <p>${calc()}</p>
                        </div>
                        <div className={classes.disclaimer}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusantium asperiores aspernatur itaque ?</p>
                        </div>
                    </div>
                    
                    <Button variant="outlined" className={classes.btn + ' ' + (totalFullShow?classes.fullShow:classes.collapseShow)}>Proceed to checkout</Button>
                    <Button className={classes.toggleShow} onClick={()=>toggleShow()}>
                        {totalFullShow?"collapse":"Click to checkout"}
                    </Button>
                </div>
            </Card>            
        </div>
    )
}

const mapStateToProps = state => {
    return { state: state.cartReducer };
}

export default connect(mapStateToProps)(OrderTotal)
