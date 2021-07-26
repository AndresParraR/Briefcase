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

import computerWithDashboard from '../assets/images/computerDashboard.png'

const Dashboards = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',

    },
    containImage:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '50%',
      marginLeft: '7em'
    },
    imageDashboard:{
      width: '110%'
    },
    containText:{
      maxWidth: '40%'
    },
    titleDashboards:{
      fontSize: '2rem',
      fontWeight: '600',
      lineHeight: '1.4em',
      marginBottom: 30
    },
    paragraphDashboards:{
      fontSize: '1.1rem',
      lineHeight: '1.55em',
      fontWeight: 300,
    },
    containButtons:{
      display: 'flex',
      marginTop: 50,
      justifyContent: 'space-between',
    },
    buttonBase:{
      borderRadius: 30,
      minWidth: 120,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      "&:hover": {
        color: '#FFF !important'
      }
    },
    btnReact:{
      "&:hover": {
        backgroundColor: '#1389FD !important',
      }
    },
    btnAngular:{
      "&:hover": {
        backgroundColor: '#dd0031 !important',
      }
    },
    btnVue:{
      "&:hover": {
        backgroundColor: '#42b983 !important',
      }
    }
  }));

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'width-adjust', 'padding-section')}>
      <div className={classes.containText}>
        <h1 className={classes.titleDashboards}>Admin Web Page</h1>
        <h5 className={classes.paragraphDashboards}>
          Admin web page with dashboard and CRUD, an example of the many use that I make in my daily.
        </h5>
        <div className={classes.containButtons}>
          <Button
            variant="contained"
            className={clsx(classes.buttonBase, classes.btnReact)}
            style={{color: "#1389FD", border: "1px solid rgba(19, 137, 253, 0.5)"}}>
            React JS
          </Button>
          <Button
            variant="contained"
            className={clsx(classes.buttonBase, classes.btnVue)}
            style={{color: "#42b983", border: "1px solid rgba(66, 185, 131, 0.5)"}}>
            Vue JS PRO
          </Button>
          <Button
            variant="contained"
            className={clsx(classes.buttonBase, classes.btnAngular)}
            style={{color: "#dd0031", border: "1px solid rgba(221, 0, 49, 0.5)"}}>
            Angular JS
          </Button>
        </div>
      </div>
      <div className={classes.containImage}>
        <img className={classes.imageDashboard} src={computerWithDashboard} alt="" />
      </div>
    </div>
  )
}

export default memo(Dashboards)