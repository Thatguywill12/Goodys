import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    homeBodyRoot: {
        flexGrow: 1,
        background: '#F9F8F3'
    },
    homeBodyPaperTop: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'row',
        border: 'none',
        background: '#F9F8F3',
        ['@media (max-width:600px)']: { 
            flexDirection: 'column',
        }
    },
    homeBodyPaperBottom: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        border: 'none',
        background: '#F9F8F3',
        ['@media (max-width:600px)']: { 
            flexDirection: 'column-reverse',
        }
    },
    homeBodyPaperContent: {
        marginLeft: '60px',
        marginRight: '60px',
        marginTop: '10%'
    },
    homeBodyImg: {
        width: '70%',
        ['@media (max-width:600px)']: { 
            width: '100%',
        }
    },
    button: {
        backgroundColor:'black', 
        color:'white',
        borderRadius: '20px',
        margin: '8%',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '5px',
        paddingBottom: '5px'
    }
}));

function HomeBody() {
    const classes = useStyles();
    return (
        <div className={classes.homeBodyRoot}>
          <Grid container>
            <Grid item xs={12}>
              <Paper variant ="outlined"  elevation = {3} className={classes.homeBodyPaperTop}>
                <img className = {classes.homeBodyImg} src="assets/img/pick-any.jpeg"/>
                <div className={classes.homeBodyPaperContent}>
                    <h1>Pick Anything You Want</h1>            
                    <p>From your neighborhood dispensary to the medical dispensary choose from <br/>over thousands of local and national favorites across the U.S.</p>
                    <Button 
                    variant="outlined" 
                    className={classes.button}
                    size='small'
                    >
                        Find Products
                    </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper  variant ="outlined"  elevation = {3} className={classes.homeBodyPaperBottom}>
                <div className={classes.homeBodyPaperContent}>
                    <h1>Self Care</h1>            
                    <p>Cannabis is more than just the flower. Topicals are increasingly gaining popularity. <br/> A variety of CBD-infused creams, balms and salves are widely available today, <br/>even in some everyday drug stores</p>
                    <Button 
                        variant="outlined" 
                        className={classes.button}
                        size='small'
                    >
                        Discover More
                    </Button>
                </div>
                <img className = {classes.homeBodyImg} src="assets/img/pick-more.jpeg"/>
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
}

export default HomeBody;
