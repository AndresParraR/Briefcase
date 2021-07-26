import React, { useState } from 'react'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import Navbar from '../components/Navbar'

import Banner from '../views/Banner'
import WhoAndPrograms from '../views/WhoAndPrograms'
import Dashboards from '../views/Dashboards'
import Monitorings from '../views/Monitorings'
import ProjectsGit from '../views/ProjectsGit'
import Mobile from '../views/Mobile'
import Contact from '../views/Contact'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MainContainer() {

  const [open, setOpen] = useState(false);

  const [snack, setSnack] = useState({});

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  
  const drawerWidth = 260

  const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      paddingTop: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    main: {
      height: '100%',
      position: 'relative'
    },
    paper:{
      margin: '-150px 40px 0px',
      boxShadow: '20px 20px 50px rgba(0, 0, 0, 0.5)',
      borderRadius: 15,
      backgroundColor: '#FFF',
      position: 'relative',
      zIndex: 1
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={clsx(classes.content, {
          [classes.contentShift]: openDrawer,
        })}>
        <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} drawerWidth={drawerWidth}/>
        <Banner/>
        <div className={classes.paper}>
          <WhoAndPrograms />
          <Dashboards />
          <Monitorings />
          <ProjectsGit />
          <Mobile />
          <Contact  setSnack={setSnack} openSnack={setOpen}/>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{vertical: 'top', horizontal: 'right'}} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snack.mode}>
          {snack.text}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MainContainer;
