import React from 'react';
import { Paper, Card, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) =>({
    generalDealsRoot:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '7%'
    },
    generalTopDeals:{
        backgroundImage: 'url("https://cdn2.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/crtv-3430_2020_design-language_cart_036-2.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: theme.spacing(210),
        height: theme.spacing(65),
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    generalTopDealsTitle:{
        marginLeft: '10%',
        fontSize: '5rem'

    },
    generalTopDealsButton:{
        width: '8%',
        marginLeft: '10%',

    }

}))

function UsersGeneralProdTopDeals() {
    const usersGeneralProdTopDealsClasses = useStyles()
    return (
        <div className={usersGeneralProdTopDealsClasses.generalDealsRoot}>
            <Paper className={usersGeneralProdTopDealsClasses.generalTopDeals}> 
                <h1 className={usersGeneralProdTopDealsClasses.generalTopDealsTitle}>Top Deals</h1>
                <Button size="large" variant="outlined" className={usersGeneralProdTopDealsClasses.generalTopDealsButton}>See Deals</Button>
            </Paper> 
        </div>
    )
}

export default UsersGeneralProdTopDeals
