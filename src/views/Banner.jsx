import React, { useState, memo } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Badge, Button, Menu, MenuItem, Fade, Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import personDark from "../assets/images/personDark.jpg";

const Banner = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${personDark})`,
      backgroundPosition: 140,
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    },
    containText:{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      justifyContent: 'center',
      
    },
    titleBanner:{
      color: '#fff',
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={clsx(classes.containText, 'width-adjust')}>
        <h1 className={classes.titleBanner}>Hi there 👋, is Andres Parra here..!</h1>
      </div>
    </div>
  )
}

export default memo(Banner)