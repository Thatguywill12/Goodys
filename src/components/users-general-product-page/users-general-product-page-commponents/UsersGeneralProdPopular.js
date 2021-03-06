import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import {Link} from 'react-router-dom';
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
        width: "100%",
    },
    slickContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '50px',
        flexDirection: 'column',
        background: '#F4F3F3',
        width: "100%",
        ['@media (max-width:600px)']: { 
            height: "400px"
        }
    },
    slick: {
        display: 'block',
        width: '75%',
        marginBottom: '100px',
        ['@media (max-width:768px) and (max-height: 1024px)']: {
            width: '85%',
            marginBottom: '30px',  
        },
        // ['@media (max-width:800px)']: { 
        //     width: '100%',
        //     marginBottom: '30px'
        // }
    }, 
    popularProductImg: {
        height: '250px',
        width: '280px',
        display: 'flex',
        justifyContent:'center',
        position: 'absolute',
        borderRadius: '8px',
        ['@media (max-width:1500px)']: {
            height: '220px',
            width: '220px',   
        },
        ['@media (max-width:1024px) and (max-height: 1366px)']: {
            height: '180px',
            width: '5.3%',   
        },
        ['@media (max-width:768px) and (max-height: 1024px)']: {
            height: '50%',
            width: '5%',   
        },
        ['@media (max-width:860px) and']: {
            height: '150px',
            width: '180px',     
        }
    },
    popularItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '350px',
    },
    popularProductImgLabel:{
        zIndex: 1, 
        color: 'white', 
        fontSize: '1.5rem', 
        fontWeight:'600',
        ['@media (max-width:1500px)']: {
            fontSize: '1.7rem'
        },
        ['@media (max-width:1024px) and (max-height: 1366px)']: {
            fontSize: '1.7rem'   
        },
        ['@media (max-width:768px) and (max-height: 1024px)']: {
            fontSize: '1.3rem'
        },
    }

}));

function mobileCheck() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

function UsersGeneralProdPopular() {
    const classes = useStyles();
    const pictures = [
        {imagel: 'https://images.weedmaps.com/categories/000/000/003/avatar/original/1607965267-CC-V3.png?w=400&h=300&dpr=1&auto=format&fit=crop', title: 'Concentrates'},
        {imagel: 'assets/img/p-p2.jpeg', title: 'Flower', path:'/users-product-page'},
        {imagel: 'https://images.weedmaps.com/categories/000/000/005/avatar/original/1607965274-ED-V3.png?w=400&h=300&dpr=1&auto=format&fit=crop', title: 'Edibles'},
        {imagel: 'https://images.weedmaps.com/categories/000/000/052/avatar/original/1607965592-CBD-v3.png?w=400&h=300&dpr=1&auto=format&fit=crop', title: 'CBD'},
        {imagel: 'https://images.weedmaps.com/categories/000/000/023/avatar/original/1607965283-TP-V3.png?w=400&h=300&dpr=1&auto=format&fit=crop', title: 'Topicals'},
        {imagel: 'https://media.gq.com/photos/5aa6afaf1d388948225ce58c/1:1/w_1500,h_1500,c_limit/2018-03_GQ_weed-paraphernalia-best-stuff_16x9.jpg', title: 'Gear'},
        {imagel: 'https://i.pinimg.com/564x/be/1b/17/be1b1733081d6ee75d94c2421d7a5c7b.jpg', title: 'Vape Pens'},
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: mobileCheck()?1:4,
        slidesToScroll: 1
    };
    return (
        <div className={classes.slickContainer}>
            <h1 style={{marginBottom: '1%', marginTop: '40px', fontSize:'2.11rem'}}>Popular Products</h1>
            <Slider {...settings} className={classes.slick} >
                {pictures.map(({ imagel, title }) => (
                    <div className={classes.popularItem}>
                        <img src={imagel} alt={title} className={classes.popularProductImg}/>
                        <label className={classes.popularProductImgLabel}>{title}</label>
                        <Link to='/users-product-page' style={{textDecoration:'none'}}>
                            <Button variant='outlined' style={{backgroundColor: 'white'}}>
                                View More
                            </Button>
                        </Link>
                      
                    </div>
                ))}
            </Slider>
        </div>
        
    )
}
      
export default UsersGeneralProdPopular;