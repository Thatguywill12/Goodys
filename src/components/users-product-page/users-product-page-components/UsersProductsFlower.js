import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button, Card} from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    userRoot: {
        flexGrow: 1,
    },
    slickContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '50px',
        flexDirection: 'column',
        // background: '#F4F3F3'
        marginBottom: '-111px'
    },
    slick: {
        display: 'block',
        width: '66%',
        marginBottom: '100px',
        ['@media (max-width:1024px) and (max-height: 1366px)']: {
            width: '80%',
            marginBottom: '100px',
        },
        ['@media (max-width:768px) and (max-height: 1024px)']: {
            width: '85%',
            marginBottom: '100px',
        },
        ['@media (max-width:600px)']: { 
            width: '100%',
            marginBottom: '30px'
        }
    }, 
    popularItemCard: {
        height: '370px',
        width: 280,
        textAlign: 'left',
        margin: '0',
        ['@media (min-width:1600px)']: { 
            height: '330px',
            width: 250,
            textAlign: 'left',
            margin: '10%'
            
        },
        ['@media (max-width:1500px)']: {
            height: '300px',
            width: '100%',
            textAlign: 'left',
            margin: '4%'
        },
        ['@media (max-width:1024px) and (max-height: 1366px)']: {
            height: '280px',
            width: '100%',
            textAlign: 'left',
        },
        ['@media (max-width:768px) and (max-height: 1024px)']: {
            height: '300px',
            width: 300,
            textAlign: 'left',
            // margin: '10%'
        },
        // ['@media (max-width:600px)']: { 
        //     // height: '370px',
        //     width: 225,
        //     textAlign: 'left',
            
        // }
    },
    popularItemContentContainer: {
        width: '63.7%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize:'0.8rem',
        ['@media (max-width:1750px)']: {
            fontSize:'0.6rem',
            width: '65%',
            fontSize:'0.6rem',  
        },
        ['@media (max-width:1024px) and (max-height: 1366px)']: {
            width: '78%',
            fontSize:'0.6rem', 
        },
        ['@media (max-width:1024px) and (max-height: 768px)']: {
            width: '78%',
            fontSize:'0.6rem', 
        },
        ['@media (max-width:768px) and (max-height: 1024px)']: {
            width: '84%',
            fontSize:'0.6rem', 
        },
        ['@media (max-width:600px)']: { 
            fontSize:'0.6rem',
            width: '66%',
            fontSize:'0.6rem',
        }
    },
    media:{
        height: 350,
        width: 350,
        ['@media (min-width:1600px)']: {
            marginLeft:'10%',
            height: 200,
            width: '650px',
            maxWidth: 165,
            textAlign: 'left',
            
        },
        ['@media (max-width:1500px)']: {
            height: '150px',
            width: '100%',
            marginLeft:'0%',
            textAlign: 'left',
            margin: '10%'
        },
        ['@media (max-width:1024px) and (max-height: 1366px)']: {
            height: '150px',
            width: '100%',
            marginLeft:'0%',
            textAlign: 'left',
            margin: '10%' 
        },
        ['@media (max-width:600px)']: { 
            height: '250px',
            maxWidth: 230,
            textAlign: 'left',
            
        }
    },
    popularItemCardFonts:{
        fontSize: '1.5rem',
        ['@media (min-width:1750px)']: {
            fontSize: '1.5rem',
            
        },
        ['@media (max-width:1500px)']: {
            fontSize: '1.5rem',
        },
        ['@media (max-width:1024px) and (max-height: 1366px)']: {
            fontSize: '1.3rem',
        },
        ['@media (max-width:600px)']: { 
            fontSize: '1.5rem',
            
        }
    }

}));

function mobileCheck() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

function UsersProductsFlower() {
    const classes = useStyles();
    const pictures = [
        {image1: 'https://images.weedmaps.com/brands/000/003/464/avatar/original/1541528123-1511815479-STIIIZY.p__1_.jpg?h=215&w=215&dpr=1&auto=format', title: 'STIIIZY'},
        {image1: 'https://images.weedmaps.com/brands/000/002/735/avatar/original/1527890203-plugandplay_logo_v2.png?h=215&w=215&dpr=1&auto=format', title: 'PLUGPlay'},
        {image1: 'https://images.weedmaps.com/brands/000/002/377/avatar/original/1604348131-Screen_Shot_2020-11-02_at_12.11.32_PM.png?h=215&w=215&dpr=1&auto=format', title: 'Crown Genetics'},
        {image1: 'https://images.weedmaps.com/brands/000/001/079/avatar/original/1536878065-ROVE-LOGO.-----.jpg?h=215&w=215&dpr=1&auto=format', title: 'Rove'},
        {image1: 'https://images.weedmaps.com/brands/000/004/667/avatar/original/1557421972-TLF_logo.png?h=215&w=215&dpr=1&auto=format', title: 'Tranquility Lane Farms'},
    ];
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: mobileCheck()?1:4,
        slidesToScroll: 1
    };
    return (
        <div className={classes.slickContainer}>
            <div className={classes.popularItemContentContainer}>
                <h1 style={{marginBottom: '60px', marginTop: '40px'}}>Flower</h1>
                <Button variant="outlined" style={{height:'20%'}}>View All</Button>
            </div>
            <Slider {...settings} className={classes.slick} >
                {pictures.map(({ image1, title }) => (
                    <div>
                        <Card className={classes.popularItemCard}>
                            <CardContent>
                                <CardMedia 
                                    className={classes.media}
                                    image = {image1}
                                /> 
                                <Typography  className={classes.popularItemCardFonts} gutterBottom variant="h5" component="h2">
                                    {title}
                                </Typography>
                                <Typography>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                </Typography>
                                {/* <img src={imagel} alt={title} className={classes.popularProductImg}/> */}
                                {/* <label style={{zIndex: 1, color: 'white', fontSize:'30px', fontWeight:'600'}}>{title}</label> */}
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
        
    )
}
      
export default UsersProductsFlower;