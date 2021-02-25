import React from 'react';
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
        alignItems:'flex-end',
    },
    imgTitleContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'flex-start',
        margin: 5,
        width: '20%',
        // backgroundColor: 'red',
        fontSize: '1rem'
    },
    img:{
        width: 100,
        height: 100,
        borderRadius: 5,
        // margin: 5
    },
    ul:{
        backgroundColor: 'blue',
        listStyle: 'none',
        textAlign: 'left'
    },
    span:{
        border: '1px solid black',
        maxWidth: '5%',
        textAlign: 'center'
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
        // justifyContent: 'flex-end',
        backgroundColor: 'green',
        width:'20%',
        marginLeft: '-10%'
    },
    plusMinusQuant:{
        display:'flex',
        alignItems: 'cemter',
        justifyContent: 'center'
    }

}))


function OrderSummery() {
    const classes = useStyles();
    const items = [
        {
            title: 'Runtz',
            price: '$35.00',
            weight: '1/8 oz'
        },
        {
            title: 'Bluberry Muffin',
            price: '$35.00',
            weight: '1/8 oz'
        }
    ];
    const [quantity, setQuantity] = React.useState(1);

    function addProduct(){
        setQuantity(quantity + 1);
    }

    function minusProduct(){
        if(quantity == 0){
            return
        }else{
            setQuantity(quantity - 1)
        }
      
    }

    return (
        <div>
            {/* Map items array */}
            {items.map((item, i) => (
                <Card className={classes.root}>
                    <div className={classes.imgTitleContainer}>
                        <h4>{item.title}</h4>
                        <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjlRchp1AtOYBSGq8Cxb26rSFPyMh4UB00A&usqp=CAU"/>
                    </div>
                    <div className={classes.quantitySect}>
                        
                            <p>{item.weight}</p>
                            <p>{item.price}</p>
                
                        <div className={classes.plusMinusQuant}>
                            <IconButton size='small' className={classes.btn} variant="outlined" onClick={minusProduct}>
                                <RemoveIcon/>
                            </IconButton>
                            <Container className={classes.span}><p>{quantity}</p></Container>
                            <IconButton size='small' className={classes.btn} variant="outlined" onClick={addProduct}>
                                <AddIcon/>
                            </IconButton>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default OrderSummery
