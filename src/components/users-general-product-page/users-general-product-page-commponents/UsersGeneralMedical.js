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
        // background: '#F4F3F3'
    },
    slick: {
        display: 'block',
        width: '65%',
        marginBottom: '100px',
        ['@media (max-width:600px)']: { 
            width: '100%',
            marginBottom: '30px'
        }
    }, 
    popularProductImg: {
        height: '300px',
        width: '300px',
        display: 'flex',
        justifyContent:'center',
        position: 'absolute',
        borderRadius: '8px'
    },
    storeFrontItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '350px',
    },
    storeFrontsContentContainer: {
        width: '60%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    popularItemCard: {
        height: '370px',
        maxWidth: 280,
        textAlign: 'left'
    },
    storeFrontMedia:{
        height: 250,
        width: 250
    }

}));

function mobileCheck() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

function UsersGeneralMedical() {
    const classes = useStyles();
    const pictures = [
        {imagel: 'https://images.weedmaps.com/dispensaries/000/000/783/avatar/original/1543872578-cana_logo_full.JPG?w=274&dpr=1&auto=format', title: 'Cana'},
        {imagel: 'https://images.weedmaps.com/dispensaries/000/062/714/avatar/original/1576473265-THE_PLANT_BEST_GOLD_WEEDMAPS_R1-01.png?w=274&dpr=1&auto=format', title: 'The Plant'},
        {imagel: 'https://images.weedmaps.com/dispensaries/000/062/761/avatar/original/1560907093-IMG_7451.jpeg?w=274&dpr=1&auto=format', title: 'Elevate'},
        {imagel: 'https://images.weedmaps.com/dispensaries/000/001/453/avatar/original/1520664897-Black-Text-and-Gradient-Logo-square.png?w=274&dpr=1&auto=format', title: 'Divine Wellness Center'},
        {imagel: 'https://images.weedmaps.com/dispensaries/000/042/360/avatar/original/1535233097-Shop___1_of_1_.jpg?w=274&dpr=1&auto=format', title: 'The Syndicate'},
    ];
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: mobileCheck()?2:4,
        slidesToScroll: 1
    };
    return (
        <div className={classes.slickContainer}>
            <div className={classes.storeFrontsContentContainer}>
                <h1 style={{marginBottom: '60px', marginTop: '40px'}}>Medical</h1>
                <Button variant="outlined" style={{height:'20%'}}>View All</Button>
            </div>
            
            <Slider {...settings} className={classes.slick} >
                {pictures.map(({ image1, title }) => (
                    <div>
                        <Card className={classes.popularItemCard}>
                            <CardContent>
                                <CardMedia 
                                    className={classes.storeFrontMedia}
                                    image = 'https://images.weedmaps.com/dispensaries/000/000/783/avatar/original/1543872578-cana_logo_full.JPG?w=274&dpr=1&auto=format'
                                /> 
                                <Typography gutterBottom variant="h5" component="h2">
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
      
export default UsersGeneralMedical;