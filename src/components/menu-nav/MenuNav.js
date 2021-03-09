import React from 'react';
import { connect } from "react-redux";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Button} from "@material-ui/core";
import {Link} from 'react-router-dom';
import RoomIcon from '@material-ui/icons/Room';


const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: 'white',
        color: 'black',
        position: 'fixed',
        width: '100%',
        left: '0px',
        top: '0px',
        zIndex: '6',
        // [theme.breakpoints.down('sm')]: {
        // }
    },
    grow: {
        flexGrow: 1,
        zIndex: 6,
    },
    filter: {
        flexGrow: 1,
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {

    },
    keywordSearch: {
        position: 'relative',
        borderRadius: '4px',
        border: '1px solid grey',
        backgroundColor: 'white',
        color: 'grey',
        width: '10px',
        '&:hover': {
            backgroundColor: '#fbfbfb',
        },
        marginRight: theme.spacing(8),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(8),
            width: '20%',
        },
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            left: '70px',
            width: '80px',
            border: 'solid thin',
            borderRadius: '10px',
            paddingLeft: '15px',
        }
    },
    addressSearch: {
        position: 'relative',
        borderRadius: '4px',
        border: '1px solid grey',
        backgroundColor: 'white',
        color: 'grey',
        width: '10px',
        '&:hover': {
            backgroundColor: '#fbfbfb',
        },
        marginRight: theme.spacing(8),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(8),
            width: '20%',
        },
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            right: '10px',
            width: '80px',
            border: 'solid thin',
            borderRadius: '10px',
            paddingLeft: '15px',
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0px',
            marginLeft: '-15px',
        }
    },
    inputRoot: {
        color: 'black',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100ch',
        },
        ['@media (max-width:600px)']: { 
            paddingLeft: '5px',
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
        },
    },
    signLink: {
        textDecoration: 'none',
    },
    shopCart: {
        width: '30px',
    },
    shoppingCount: {
        border: 'none',
        fontSize: '20px',
        width: '40px',
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    showMainMenu: {
        position: 'fixed',
        top: '60px',
        left: '0px',
        transition: 'top 0.3s ease-in-out',
        zIndex: '5',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        padding: '20px',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        background: 'white',
        [theme.breakpoints.down('sm')]: {
            top: '50px',
            left: '0px',
            transition: 'left 0.3s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            height: 'calc(100% - 50px)',
        }
    },
    hideMainMenu: {
        position: 'fixed',
        top: '-100%',
        left: '0px',
        transition: 'top 0.3s ease-in-out',
        zIndex: '5',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        padding: '20px',
        display: 'flex',
        width: '100%',
        background: 'white',
        [theme.breakpoints.down('sm')]: {
            top: '50px',
            left: '-101%',
            transition: 'left 0.3s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            height: 'calc(100% - 50px)',
            justifyContent: 'space-around',
        }
    },
    mainMenuItem: {
        justifyContent: 'center', display: 'flex',
        [theme.breakpoints.down('sm')]: {
            borderBottom: 'solid thin gray',
            width: '80%',
        }
    },
    mobileOnly: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'initial',
        }
    }
}));

function  MenuNav({ state, signOut }) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
    
    const [mainMenuOpen, setMainMenuOpen] = React.useState(false);

    const handleSignMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileMenuOpen = (event) => {

    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        setMainMenuOpen(false);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        
        <MenuItem onClick={handleMenuClose}><Link className={classes.signLink} to='/sign-in'>Sign In</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}><Link className={classes.signLink} onClick= {signOut}>Sign Out</Link></MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const profileMenu = (
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
            <p className={classes.mobileOnly}>Profile</p>
        </MenuItem>
    );
    const signMenu = (
        <MenuItem onClick={handleSignMenuOpen} style={{display: 'flex', justifyContent: 'center'}}>
            
            <p>Sign In / Out</p>
        </MenuItem>
    );
    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                <Badge badgeContent={11} color="secondary">
                    <NotificationsIcon />
                </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            { state.signedUser.username?profileMenu:'' }
            { signMenu }
        </Menu>
    );

    const menuLinks = [
        { menuHref: "/", caption: 'Home' },
        { menuHref: "/drivers-page", caption: 'Drivers' },
        { menuHref: "/partners-page", caption: 'Partners' },
        { menuHref: "/users-home-page", caption: 'User' },
        { menuHref: "/users-general-product-page", caption: 'User General' },
        { menuHref: "/users-product-page", caption: 'User Products' },
        { menuHref: "/retailer", caption: 'Retailer' },
    ];

    const mainMainHolder = (
        <div>
            <MenuIcon />
        </div>
    );

    const mainMenu = (
        <div className={mainMenuOpen?classes.showMainMenu:classes.hideMainMenu}>
        {
            menuLinks.map(({menuHref, caption}, i) => (
                <MenuItem onClick={handleMenuClose} className={classes.mainMenuItem} key={i}>
                    <Link to={menuHref} style={{textDecoration: 'none', color:'black'}}>
                        {caption}
                    </Link>
                </MenuItem>
            ))
        }
        </div>
    );

    return (
      <div className={classes.grow}>
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={()=>{setMainMenuOpen(!mainMenuOpen)}}
                    >
                    {mainMainHolder}
                </IconButton>
                
                <div className={classes.addressSearch}>
                    <div className={classes.searchIcon}>
                        <RoomIcon />
                    </div>
                    <InputBase
                        placeholder="Address"
                        classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'Address' }}
                    />
                </div>
                <div className={classes.filter}>
                Pick up 
                </div>
                <div className={classes.grow} />
                <Typography className={classes.title} variant="h6" noWrap>
                Goodys
                </Typography>
                <div className={classes.grow} />
                <div className={classes.keywordSearch}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    { signMenu }
                    { state.signedUser.username?profileMenu:'' }
                    <Link to='/cart' style={{textDecoration: 'none', justifyContent: 'center', display: 'flex', }}>
                        <Button>
                            <img className={classes.shopCart}src='assets/img/shopping-cart.png' />
                            <input value="0" className={classes.shoppingCount} disabled='disabled'/>
                        </Button>
                    </Link>
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                    <MoreIcon />
                </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        {mainMenu}
      </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return { state: state.userReducer };
};

const signOut = () => {
    return {
        type : 'LOG_OUT',
    }
}

export default connect(mapStateToProps, {signOut})(MenuNav);

