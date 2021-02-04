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
        height: '200px'
    }
  }));

function HomeJoinUs() {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper elevation={0} className={classes.homeJoinUsPaper}>
              <img className = {classes.homeJoinUsImg} src="https://i.pinimg.com/564x/91/a7/a5/91a7a5c4dbe6c3e3a43d67f5bbc7634e.jpg"/>
                <div className={classes.homeBodyPaperContent}>
                    <h3>Join the team</h3>
                    <p>As a delivery driver, you'll make relieble money-working anytime anywhere.</p>
                    <div className ="join__Team__Partner__Links">
                      <Link to='/drivers-page'>
                            <Button  variant="outlined" size="small" style={{borderRadius:"10px"}}>
                                <a>Start earning</a>
                            {/* < KeyboardArrowRightIcon className="join__Team__Partner__Links__Btn"/> */}
                            </Button>
                      </Link>
                    </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0} className={classes.homeJoinUsPaper}>
                    <img className = {classes.homeJoinUsImg} src="https://i.pinimg.com/564x/72/01/f7/7201f71d972d36e69123de74e1010c8a.jpg"/>
                    <div className={classes.homeBodyPaperContent}>
                    <h3>Join the team</h3>
                    <p>As a delivery driver, you'll make relieble money-working anytime anywhere.</p>
                    <div className ="join__Team__Partner__Links">
                      <Link to='/partners-page'>
                            <Button  variant="outlined" size="small" style={{borderRadius:"10px"}}>
                                <a>Start earning</a>
                            {/* < KeyboardArrowRightIcon className="join__Team__Partner__Links__Btn"/> */}
                            </Button>
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
