import React from 'react'
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


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
    homeWelcomeContent: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        position: 'absolute',
        top: '40%',
        left: '35%'
    },
    homeBodyPaperContent: {
        margin: '10%'
    },
    homeWelcomeImg: {
        width: '100%'
    }
}));

function HomeWelcome() {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3} className={classes.homeBodyRoot}>
                <Grid item xs={12} >
                <img className={classes.homeWelcomeImg} src="https://weedseedshop.com/blog/wp-content/uploads/Does-Cannabis-Make-You-More-Creative-WeedSeedShop.jpg"/>

                    <div className={classes.homeWelcomeContent}>
                        <form  className="welcome-img-input" action="">
                            <input type="text" placeholder="...Where should we deliver to?" size="35"/>
                            <Button
                            variant="outlined" 
                            className="address__InputBtn"
                            size="small"
                            style={{backgroundColor:'black', color:'white'}}
                            >
                                Find Dispensary
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeWelcome
