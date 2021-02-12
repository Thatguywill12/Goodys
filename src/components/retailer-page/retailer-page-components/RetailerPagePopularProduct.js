import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Button, ButtonBase} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({

    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingLeft: '20%',
        paddingRight: '20%',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '15px',
            paddingRight: '15px',
        }
    },
    popularMain: {
        width: '100%',
        marginBottom: '100px',
    },
    productImg: {
        marginTop: '5px',
        width: '250px',
        height: '200px',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            height: '100%',
            width: '100%'
        }
    },
    categoryName: {
        fontSize: '31px',
        letterSpacing: '2px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        }
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
        textAlign: 'left',
        marginTop: '80px',
        marginBottom: '30px',
    },
    showAllBtn: {
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        background: '#d6d5d5',
        ['@media (max-width:600px)']: { 
            marginBottom: '20px'
        }
    },
    productHolder: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: '40px',
        }
    }
}));

function RetailerPagePopularProduct() {
    const classes = useStyles();
    const productCategory = ['Popular Product', 'Flower', 'Edible'];
    const pictures = [
        {imagel: 'assets/img/p-p-1.jpeg', title: 'Concentrates'},
        {imagel: 'assets/img/p-p2.jpeg', title: 'Flower'},
        {imagel: 'assets/img/p-p3.jpeg', title: 'Edibles'},
        {imagel: 'assets/img/p-p-1.jpeg', title: 'Concentrates'},
        {imagel: 'assets/img/p-p2.jpeg', title: 'Flower'},
        {imagel: 'assets/img/p-p3.jpeg', title: 'Edibles'},
    ];
    return (
        <div className={classes.container}>
        {
            productCategory.map(category=>(
                <div>
                    <div className={classes.title}>
                        <label className={classes.categoryName}>{category}</label>
                        <ButtonBase className={classes.showAllBtn}>Show All</ButtonBase>
                    </div>
                    <Grid container className={classes.popularMain}>
                    {
                        pictures.map(({imagel, title}) => (
                            <Grid sm={4} className={classes.productHolder}>
                                <img className={classes.productImg} src={imagel} />
                            </Grid>
                        ))
                    }
                    </Grid>
                </div>
            ))
            
        }
        </div>
    )
}

export default RetailerPagePopularProduct
