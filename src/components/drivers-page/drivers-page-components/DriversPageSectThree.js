import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  driversPageSectThreeRoot: {
    flexGrow: 1,
    marginTop: '10%',
  },
  paper: {
    height: 140,
    width: 100,
  },
  driversPageSectThreeImg:{
      width: '250px',
      height: '250px'
  },
  driversPageSectThreeContent:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

}));

function DriversPageSectThree(props) {
  const [spacing, setSpacing] = React.useState(2);
  const driversPageSectThreeClasses = useStyles();
//   const [driverPerks, setDriverPerks] = React.useState([
//       {imgSrc:'https://i.pinimg.com/564x/89/ab/9f/89ab9f4ba8683e670c37189e56ac7d69.jpg', header: 'Your Vehicle, Your Time', para: ' Grab your car, bike, scooter, or even shoes and deliver whenever you want—for an hour, a weekend, or throughout the week.', id: 1 },
//       {imgSrc:'https://i.pinimg.com/564x/c7/5a/43/c75a43fb87d7dc5e53fdfed72c89fc84.jpg', header: 'Your Vehicle, Your Time', para: 'Achieve your short-term goals or long-term dreams by driving or biking with Goodys.', id: 2 },
//       {imgSrc:'https://i.pinimg.com/564x/06/7f/43/067f43ddbc17ecfa397e0e7410830ce5.jpg', header: 'Your Vehicle, Your Time', para: "Deliver near your home or in a city you're just visiting", id: 3 }

//   ]);
//   let perksToRender;
//   {if(props.driverPerks){
//     perksToRender = props.driverPerks.map(card => {
//         return <Grid item card = {card} className={classes.paper} key={card.id}>
//             <Paper className={classes.paper} card = {card} key={card.id}/>
//         </Grid>
//     })}
// }

  return (
    <Grid container className={ driversPageSectThreeClasses. driversPageSectThreeRoot} spacing={2}>
        <Grid item xs={4}>
            <Paper elevation={0} className="del-ord-with-g-option-one">
                <div className="del-ord-with-g-options-img">
                    <img className={driversPageSectThreeClasses.driversPageSectThreeImg} src="https://i.pinimg.com/564x/89/ab/9f/89ab9f4ba8683e670c37189e56ac7d69.jpg" />
                </div>
                <div className={driversPageSectThreeClasses.driversPageSectThreeContent}>
                    <h3>Your Vehicle, Your Time</h3>
                    <p>
                        Grab your car, bike, scooter, or even shoes and deliver whenever you want—for an hour, a weekend, or throughout the week.
                    </p>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={4}>
            <Paper elevation={0} className="del-ord-with-g-option-one">
                <div className="del-ord-with-g-options-img">
                    <img className={driversPageSectThreeClasses.driversPageSectThreeImg} src="https://i.pinimg.com/564x/c7/5a/43/c75a43fb87d7dc5e53fdfed72c89fc84.jpg" />
                </div>
                <div className={driversPageSectThreeClasses.driversPageSectThreeContent}>
                    <h3>Your Vehicle, Your Time</h3>
                    <p>
                        Achieve your short-term goals or long-term dreams by driving or biking with Goodys.
                    </p>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={4}>
            <Paper elevation={0} className="del-ord-with-g-option-one">
                <div className="del-ord-with-g-options-img">
                    <img className={driversPageSectThreeClasses.driversPageSectThreeImg} src="https://i.pinimg.com/564x/06/7f/43/067f43ddbc17ecfa397e0e7410830ce5.jpg" />
                </div>
                <div className={driversPageSectThreeClasses.driversPageSectThreeContent}>
                    <h3>Your Vehicle, Your Time</h3>
                    <p>Deliver near your home or in a city you're just visiting.</p>
                </div>
            </Paper>
        </Grid>
    </Grid>
  );
}


export default DriversPageSectThree;