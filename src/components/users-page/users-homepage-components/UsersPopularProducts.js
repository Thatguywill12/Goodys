import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
    userRoot: {
        flexGrow: 1,
    },
    homeBodyContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: "100%"
    },
    slickContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '50px',
        flexDirection: 'column',
        background: '#F4F3F3'
    },
    slick: {
        display: 'block',
        width: '1000px',
        marginBottom: '100px'
    }, 
    popularProductImg: {
        height: '250px',
        width: '250px',
        display: 'flex',
        justifyContent:'center',
        position: 'absolute',
    },
    popularItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '250px'
    }

}));

function UsersPopularProducts() {
    const classes = useStyles();
    const pictures = [
        {imagel: 'assets/img/p-p-1.jpeg', title: 'Concentrates'},
        {imagel: 'assets/img/p-p2.jpeg', title: 'Flower'},
        {imagel: 'assets/img/p-p3.jpeg', title: 'Edibles'},
        {imagel: 'assets/img/p-p-1.jpeg', title: 'Concentrates'},
        {imagel: 'assets/img/p-p2.jpeg', title: 'Flower'},
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className={classes.slickContainer}>
            <h1 style={{marginBottom: '60px', marginTop: '40px'}}>Popular Products</h1>
            <Slider {...settings} className={classes.slick} >
                {pictures.map(({ imagel, title }) => (
                    <div className={classes.popularItem}>
                        <img src={imagel} alt={title} className={classes.popularProductImg}/>
                        <label style={{zIndex: 1, color: 'white', fontSize:'30px', fontWeight:'600'}}>{title}</label>
                    </div>
                ))}
            </Slider>
        </div>
        
    )
}
      
export default UsersPopularProducts;