import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Button} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'center',
        marginTop: '3%'
    },
    img:{
        width: '70%',
        height: '450px',
        borderRadius: '10px'
    },
    uPaper:{
        alignText: 'center',
        

    }
}))

function UsersGeneralProductPromo(props)

{
    const usersGeneralProdClasses = useStyles()
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: "https://post.healthline.com/wp-content/uploads/2019/04/Weed_Orange_1200x628-facebook.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: "https://post.healthline.com/wp-content/uploads/2019/04/Weed_Orange_1200x628-facebook.jpg"
        }
    ]

    return (
        <Carousel className={usersGeneralProdClasses.root}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const usersGeneralProdClasses = useStyles()
    return (
        <Paper elevation={0} className={usersGeneralProdClasses.uPaper}>
            <img src={props.item.img} className={ usersGeneralProdClasses.img} />
        </Paper>
    )
}

export default UsersGeneralProductPromo