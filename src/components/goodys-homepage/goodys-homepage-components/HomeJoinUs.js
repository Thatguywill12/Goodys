import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
  homeJoinUsRoot: {
      flexGrow: 1,
  },
  homeJoinUsPaper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      display: 'column',
      flexDirection: 'row'
  },
  homeJoinUsPaperContent: {
      margin: '10%'
  },
  homeJoinUsImg: {
      width: '200px',
      height: '200px',
      ['@media (max-width:600px)']: { 
        width: '100%',
      }
  },
  homeBodyPaperContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  p: {
    width: '280px',
    color: 'black',
    ['@media (max-width:600px)']: { 
      width: '100%',
    }
  },
  link: {
    textDecoration: 'none',
    color: '#008aff',
    fontSize: '16px'
  }, 
  arrow: {
    marginLeft: '5px',
    
  },
  h: {
    color: 'black',
    fontSize: '28px',
    fontStyle: 'bold',
    marginBottom: '0px',
    ['@media (max-width:600px)']: { 
      color: 'red'
    }
  }
}));

function HomeJoinUs() {
    const classes = useStyles();
    return (
        <div>
          <Grid container>
            <Grid item xs={6}>
              <Paper elevation={0} className={classes.homeJoinUsPaper}>
              <img className = {classes.homeJoinUsImg} src="assets/img/deliver1.jpeg"/>
                <div className={classes.homeBodyPaperContent}>
                    <h3 className={classes.h}>Join the team</h3>
                    <p className={classes.p}>As a delivery driver, you'll make relieble money-working anytime anywhere.</p>
                    <div className ="join__Team__Partner__Links">
                      <Link className={classes.link} to='/drivers-page'>
                            {/*<Button  variant="outlined" size="small" style={{borderRadius:"10px"}}>*/}
                                <a>Start earning</a>
                            {/* < KeyboardArrowRightIcon className="join__Team__Partner__Links__Btn"/> */}
                            <img className={classes.arrow} src='assets/img/arrow-right.svg' alt='arrow' />
                            {/*</Button>*/}
                      </Link>
                    </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0} className={classes.homeJoinUsPaper}>
                    <img className = {classes.homeJoinUsImg} src="assets/img/deliver2.png"/>
                    <div className={classes.homeBodyPaperContent}>
                    <h3 className={classes.h}>Join the team</h3>
                    <p className={classes.p}>Grow your buisness and reach new customers by partnering with us.</p>
                    <div className ="join__Team__Partner__Links">
                      <Link className={classes.link} to='/partners-page'>
                            {/*<Button  variant="outlined" size="small" style={{borderRadius:"10px"}}>*/}
                              <a>Start earning</a>
                            {/* < KeyboardArrowRightIcon className="join__Team__Partner__Links__Btn"/> */}
                            <img className={classes.arrow} src='assets/img/arrow-right.svg' alt='arrow' />
                            {/*</Button>*/}
                      </Link>
                    </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
            
        </div>
    )
}

export default HomeJoinUs
