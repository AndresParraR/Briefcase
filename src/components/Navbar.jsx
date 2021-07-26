import React, { useState, useEffect, memo } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Badge, Button, Menu, MenuItem, Fade, Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

import treeImage from "../assets/images/tree.jpg";

import {
  NavLink
} from "react-router-dom";

library.add(fas, far, fab);

const Navbar = (props) => {

  useEffect(() => {
    window.addEventListener("scroll", function(){
      document.getElementById("nav").classList.toggle("scroll-active", window.scrollY > 270);
    });
  }, [])

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar:{
      backgroundColor: 'transparent',
      boxShadow: 'none',
      transition: 'all 150ms ease 0s',
      padding: '10px 0'
    },
    toolBar:{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      justifyContent: 'space-between',
      "@media (min-width: 576px)":{
        maxWidth: 540
      },
      "@media (min-width: 768px)":{
        maxWidth: 720
      },
      "@media (min-width: 992px)":{
        maxWidth: 960
      },
      "@media (min-width: 1200px)":{
        maxWidth: 1140
      },
    },
  }));

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [links, setLinks] = useState([
    {
      icon: <DashboardIcon />,
      title: 'Dashboard',
      route: '/dashboard',
      isFocused: true
    },
    {
      icon: <AccountCircleIcon />,
      title: 'Administrator',
      route: '/administrator',
      isFocused: false
    },
  ]);

  const open = Boolean(anchorEl)


  const handleDrawerOpen = () => {
    props.setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    props.setOpenDrawer(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar id="nav" className={classes.appBar} position="fixed">
      <Toolbar className={clsx(classes.toolBar, 'width-adjust')}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Briefcase
          </Typography>
          <IconButton href="https://web.whatsapp.com/send?phone=+573214271447" target="_blank" className={classes.btnWp}>
            <FontAwesomeIcon style={{color: "#FFF", fontSize: 30}} icon={['fab', 'whatsapp']} />
          </IconButton>
          <Button href="tel:573214271447" style={{color: 'currentColor'}}>
            +57 3214271447
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default memo(Navbar)