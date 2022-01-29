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

import react from '../assets/images/monitoringReact.png';
import angular from '../assets/images/monitoringAngular.png';
import vue from '../assets/images/monitoringVue.png';

const Monitorings = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '@media (max-width: 992px)':{
        flexDirection: 'column-reverse',
        alignItems: 'center'
      }
    },
    containImages:{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '50%',
      marginRight: '5em',
      '@media (max-width: 992px)':{
        marginRight: 0,
      }
    },
    imageMonitoring:{
      width: '110%',
      borderRadius: 30,
      boxShadow: '0 13px 16px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)'
    },
    containText:{
      maxWidth: '40%',
      '@media (max-width: 992px)':{
        maxWidth: 400
      }
    },
    titleMonitorings:{
      fontSize: '2rem',
      fontWeight: '600',
      lineHeight: '1.4em',
      marginBottom: 30,
      '@media (max-width: 500px)':{
        textAlign: 'center',
      }
    },
    paragraphMonitorings:{
      fontSize: '1.1rem',
      lineHeight: '1.55em',
      fontWeight: 300,
      '@media (max-width: 500px)':{
        textAlign: 'center',
      }
    },
    containImage3D:{
      transform : 'rotate3d(18, 18, -21, 23deg)',
      '@media (max-width: 992px)':{
        transform: 'none',
      }
    },
    containImage:{
      perspective: 900,
      transformStyle: 'preserve-3d',
      position: 'relative',
      left: -15,
      '@media (max-width: 992px)':{
        left: 0,
        marginTop: '5em'
      },
    },
    containButtons:{
      display: 'flex',
      marginTop: 50,
      justifyContent: 'space-between',
      '@media (max-width: 500px)':{
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    },
    buttonBase:{
      borderRadius: 30,
      minWidth: 120,
      backgroundColor: 'rgba(255, 255, 255, .9)',
      "&:hover": {
        color: '#FFF !important'
      },
      '@media (max-width: 500px)':{
        margin: '10px',
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
      <div className={classes.containImages}>
        <div className={classes.containImage}>
          <div className={classes.containImage3D}>
            <img className={classes.imageMonitoring} src={react} alt="" />
          </div>
        </div>
      </div>
      <div className={classes.containText}>
        <h1 className={classes.titleMonitorings}>Live Map</h1>
        <h5 className={classes.paragraphMonitorings}>
          Real time connection with sockets protocol, and map display using plugin integration.
        </h5>
        <div className={classes.containButtons}>
          <Button
            href="https://andresparrar.github.io/monitoringReact/"
            target="_blank"
            variant="contained"
            className={clsx(classes.buttonBase, classes.btnReact)}
            style={{color: "#1389FD", border: "1px solid rgba(19, 137, 253, 0.5)"}}>
            React JS
          </Button>
          <Button
            href="https://andresparrar.github.io/monitoringVue/"
            target="_blank"
            variant="contained"
            className={clsx(classes.buttonBase, classes.btnVue)}
            style={{color: "#42b983", border: "1px solid rgba(66, 185, 131, 0.5)"}}>
            Vue JS PRO
          </Button>
          <Button
            href="https://andresparrar.github.io/monitoringAngular/"
            target="_blank"
            variant="contained"
            className={clsx(classes.buttonBase, classes.btnAngular)}
            style={{color: "#dd0031", border: "1px solid rgba(221, 0, 49, 0.5)"}}>
            Angular JS
          </Button>
        </div>
      </div>
    </div>
  )
}

export default memo(Monitorings)