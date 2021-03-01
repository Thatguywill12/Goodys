import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {Link} from 'react-router-dom';
import {makeStyles } from '@material-ui/core/styles';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';


const useStyles =  makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems: 'center',
        // minWidth: 350,
        // ['@media (max-width:1024px)']: {
        //     width: '80%',
        //     marginBottom: '100px',
        // },
        // marginLeft: '18%',
    },
    img:{
        width: 150,
        height: 150,
        borderRadius: 5,
        margin: 5
    },
    ul: {
        display:'flex', 
        flexDirection:'column', 
        alignItems:'flex-start', 
        listStyle:'none',
        ['@media (max-width:600px)']: { 
            paddingLeft: '10px',
        }
    },
    li: {
        minHeight: '40px',
        textAlign: 'left',
        ['@media (max-width:600px)']: { 
            fontSize: '13px',
        }
    }

}))

function OrderRetailer() {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <img className={classes.img} src="https://images.weedmaps.com/dispensaries/000/062/761/avatar/square_fill/1560907093-IMG_7451.jpeg"/> 
                <ul className={classes.ul}>
                    <li className={classes.li}>Elevate</li>
                    <li className={classes.li}>Stars/Rating/(number of Reviews)</li>
                    <li className={classes.li}>Medical & Recreational * Delivery</li>
                    <Button size='small' variant='outlined'>Open</Button>
                </ul>
            </Card>
            
        </div>
    )
}

export default OrderRetailer

