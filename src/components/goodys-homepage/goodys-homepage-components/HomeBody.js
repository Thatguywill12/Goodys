import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    homeBodyRoot: {
        flexGrow: 1,
    },
    homeBodyPaperTop: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'row'
    },
    homeBodyPaperBottom: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    homeBodyPaperContent: {
        margin: '10%'
    },
    homeBodyImg: {
        width: '50%'
    }
}));

function HomeBody() {
    const classes = useStyles();
    return (
        <div className={classes.homeBodyRoot}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper variant ="outlined"  elevation = {3} className={classes.homeBodyPaperTop}>
              <img className = {classes.homeBodyImg} src="https://weedmaps.com/news/wp-content/uploads/2020/07/CRTV-3502_Strains-Articles-Arousal_015_16x9-3-2.jpg"/>
                <div className={classes.homeBodyPaperContent}>
                    <h1>Pick Anything You Want</h1>            
                    <p>From your neighborhood dispensary to the medical dispensary choose from <br/>over thousands of local and national favorites across the U.S.</p>
                    <Button 
                    variant="outlined" 
                    style= {{backgroundColor:'black', color:'white'}}
                    size='small'
                    >
                        Find Dispensary
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
                        style= {{backgroundColor:'black', color:'white'}}
                        size='small'
                    >
                        Find Dispensary
                    </Button>
                </div>
                    <img className = {classes.homeBodyImg} src="https://thefreshtoast.com/wp-content/uploads/2019/11/could-cbd-and-cannabis-eliminate-the-high-cost-and-high-stakes-of-current-psoriasis-medicines-1024x614.jpg"/>
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
}

export default HomeBody;
