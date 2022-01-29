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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import mobile1 from '../assets/images/mobile1.png'
import mobile2 from '../assets/images/mobile2.png'
import mobile3 from '../assets/images/mobile3.png'
import mobile4 from '../assets/images/mobile4.png'
import mobile5 from '../assets/images/mobile5.png'

import playStore from '../assets/images/PlayStore.png'
import appStore from '../assets/images/appStore.png'

const Mobile = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '@media (max-width: 992px)':{
        flexDirection: 'column',
        alignItems: 'center'
      }
    },
    containImage:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '60%',
      marginLeft: '10em',
      perspective: 900,
      transformStyle: 'preserve-3d',
      '@media (max-width: 992px)':{
        marginTop: '5em',
        maxWidth: 'none',
        flexWrap: 'wrap',
        marginLeft: 0
      }
    },
    containImage3D:{
      transform : 'rotateY(-25deg)',
      borderRadius: 15,
      height: 400,
      width: 200,
      backgroundColor: '#FFF',
      boxShadow: '10px 4px 14px rgb(0 0 0 / 12%)',
      transition: 'all .1s',
      "&:hover": {
        marginTop: -100
      },
      '@media (max-width: 1200px)':{
        height: 325,
        width: 150,
        marginLeft: '-5em !important'
      },
      '@media (max-width: 992px)':{
        margin: '30px',
        transform: 'none',
        marginLeft: '0 !important'
      }
    },
    imageDashboard:{
      width: '110%'
    },
    containText:{
      maxWidth: '40%',
      '@media (max-width: 992px)':{
        maxWidth: '100%',
      }
    },
    titleDashboards:{
      fontSize: '2rem',
      fontWeight: '600',
      lineHeight: '1.4em',
      marginBottom: 30,
      '@media (max-width: 500px)':{
        textAlign: 'center',
      }
    },
    paragraphDashboards:{
      fontSize: '1.1rem',
      lineHeight: '1.55em',
      fontWeight: 300,
      '@media (max-width: 500px)':{
        textAlign: 'center',
      }
    },
    containButtons:{
      display: 'flex',
      marginTop: 50,
      justifyContent: 'space-between',
      '@media (max-width: 992px)':{
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    },
    buttonBase:{
      borderRadius: 30,
      minWidth: 120
    },
    pro:{
      position: 'absolute',
      top: -23,
      right: -20,
      padding: '5px 9px',
      color: '#FFF',
      backgroundColor: '#f50057',
      borderRadius: 30,
    },
    marginL:{
      marginLeft: '-6em'
    },
    imageBase:{
      width: '100%',
      borderRadius: 15,
    },
    imgStoreBtn:{
      width: 190,
      borderRadius: 7
    },
    storeBtn:{
      "&:hover": {
        boxShadow: 'none !important',
        marginBottom: '0 !important',
        "& $imgStoreBtn": {
          boxShadow: '0 4px 5px 0 rgb(0 0 0 / 70%), 0 3px 1px -2px rgb(0 0 0 / 21%), 0 1px 5px 0 rgb(0 0 0 / 24%)',
        }
      }
    }
  }));

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'width-adjust', 'padding-section')}>
      <div className={classes.containText}>
        <h1 className={classes.titleDashboards}>Feel App</h1>
        <h5 className={classes.paragraphDashboards}>
          Beautiful app, build on flutter for scheduled services of personal care and beauty. Firebase connection for instant communication, and REST services for management and database store.
        </h5>
        <div className={classes.containButtons}>
          <IconButton href="https://play.google.com/store/apps/details?id=com.anavrin.Flutter_Feel_App" target="_blank" className={classes.storeBtn}>
            <img className={classes.imgStoreBtn} src={playStore} alt="" />
          </IconButton>
          <IconButton href="https://apps.apple.com/co/app/feel-app/id1557813285?l=en" target="_blank" className={classes.storeBtn}>
            <img className={classes.imgStoreBtn} src={appStore} alt="" />
          </IconButton>
        </div>
      </div>
      <div className={classes.containImage}>
        
          <div className={classes.containImage3D}>
            <img className={classes.imageBase} src={mobile1} alt="" />
          </div>
        
        
          <div className={clsx(classes.containImage3D, classes.marginL)}>
          <img className={classes.imageBase} src={mobile2} alt="" />
          </div>
        
        
          <div className={clsx(classes.containImage3D, classes.marginL)}>
            <img className={classes.imageBase} src={mobile3} alt="" />
          </div>
        
        
          <div className={clsx(classes.containImage3D, classes.marginL)}>
            <img className={classes.imageBase} src={mobile4} alt="" />
          </div>
        
        
          <div className={clsx(classes.containImage3D, classes.marginL)}>
            <img className={classes.imageBase} src={mobile5} alt="" />
          </div>
        
      </div>
    </div>
  )
}

export default memo(Mobile)