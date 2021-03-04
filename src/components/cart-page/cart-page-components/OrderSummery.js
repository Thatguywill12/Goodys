import React from 'react';
import { useState } from 'react';
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {Link} from 'react-router-dom';
import {makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { IconButton, Container } from '@material-ui/core';



const useStyles =  makeStyles((theme) => ({
    root:{
        flexGrow: 1,
        flexShrink: 1,
        marginTop: 10,
        display:'flex',
        alignItems:'flex-start',
        flexDirection: 'column',
    },
    imgTitleContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'flex-start',
        margin: 5,
        width: '150px',
        // backgroundColor: 'red',
        fontSize: '1rem',
        ['@media (max-width:600px)']: { 
            width: 'calc(100% - 10px)',
        }
    },
    img:{
        width: '100px',
        height: '100px',
        borderRadius: 5,
        // margin: 5

        ['@media (max-width:600px)']: { 
            width: '100%',
            height: '200px',
        }
    },
    ul:{
        backgroundColor: 'blue',
        listStyle: 'none',
        textAlign: 'left'
    },
    span:{
        border: '1px solid black',
        width: '64px',
        textAlign: 'center',
        marginLeft: '20px',
        marginRight: '20px',
        borderRadius: '10px',
    },
    btn:{
        border:'1px solid black'
    },
    quantitySect:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        lineHeight: 0.1,
        margin: 5,
        width:'150px',
    },
    plusMinusQuant:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    productHeader: {
        width: '100%',
        background: '#b7b7b7',
        color: 'white',
        ['@media (max-width:600px)']: { 
            display: 'none',
        }
    },
    productBody: {
        width: '100%',
        display: 'inline-flex',
        ['@media (max-width:600px)']: { 
            flexDirection: 'column',
        },
    },
    header1: {
        width: '40%',
        textAlign: 'left',
        ['@media (max-width:600px)']: { 
            width: '100%',
        }
    },
    header2: {
        width: '10%',
        ['@media (max-width:600px)']: { 
            width: '100%',
        }
    },
    header3: {
        width: '10%',
        ['@media (max-width:600px)']: { 
            width: '100%',
        }
    },
    header4: {
        width: '25%',
        ['@media (max-width:600px)']: { 
            width: '100%',
        }
    },
    header5: {
        width: '15%',
        ['@media (max-width:600px)']: { 
            width: '100%',
        }
    },
    topPadding: {
        paddingTop: '30px',
        ['@media (max-width:600px)']: { 
            paddingTop: '5px',
        }
    },
}))


function OrderSummery({state, dispatchToStore}) {

    const classes = useStyles();
console.log(state);
    const items = state.myCart!=null?[...state.myCart]:[];
    
    ;

    const floatingFormat = (n)=>{
        let src = String(n);
        let p = src.indexOf('.');
        if (p == -1) src = src + ".";
        p = src.indexOf('.');
        while (src.length - p < 3) {
            src = src + "0";
        }
        return src;
    }

    return (
        <div>
            {/* Map items array */}
            {items.map((item, i) => (
                <Card className={classes.root} key={i}>
                    {i == 0? (
                        <table className={classes.productHeader}> 
                            <th className={classes.header1}>items</th>
                            <th className={classes.header2}>weight</th>
                            <th className={classes.header3}>price</th>
                            <th className={classes.header4}>quantity</th>
                            <th className={classes.header5}>sub total</th>
                        </table>
                    ):(<></>)}
                    <div className={classes.productBody}> 
                        <div className={classes.header1}>
                            <div className={classes.imgTitleContainer}>
                                <h4>{item.title}</h4>
                                <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjlRchp1AtOYBSGq8Cxb26rSFPyMh4UB00A&usqp=CAU"/>
                            </div>
                        </div>
                        <div className = {classes.header2 + ' ' + classes.topPadding}> 
                            <p>{item.weight}</p> 
                        </div>
                        <div className={classes.header3 + ' ' +  classes.topPadding}>
                            <p>${floatingFormat(item.price)}</p>
                        </div>
                        <div className={classes.header4 + ' ' +  classes.topPadding}>
                            <div className={classes.plusMinusQuant}>
                                <IconButton size='small' className={classes.btn} variant="outlined" onClick={()=>dispatchToStore('-', item)}>
                                    <RemoveIcon/>
                                </IconButton>
                                <Container className={classes.span}><p>{item.countOf}</p></Container>
                                <IconButton size='small' className={classes.btn} variant="outlined" onClick={()=>dispatchToStore('+', item)}>
                                    <AddIcon/>
                                </IconButton>
                            </div>
                        </div>
                        <div className={classes.header5 + ' ' +  classes.topPadding}>
                            <p> ${floatingFormat(item.price * item.countOf)}</p>
                        </div>
                    </div>
                </Card>
            ))}

        </div>
    )
}

const mapStateToProps = state => {
    return { state };
};

const dispatchToStore = (type, selectedProduct) => {
    switch (type) {
        case '+': {
            return {
                type: 'ADD_ONE',
                selectedProduct: selectedProduct
            }
        }
        case '-': {
            return {
                type: 'MINUS_ONE',
                selectedProduct: selectedProduct
            }
        }
    }
}

export default connect(mapStateToProps, {dispatchToStore})(OrderSummery);
