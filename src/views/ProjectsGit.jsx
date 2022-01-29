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
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

import swaggerIcon from '../assets/images/Swagger-logo.png'

library.add(fas, far, fab);

const ProjectsGit = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: '50px 30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (max-width: 500px)':{
        padding: 0,
      }
    },
    containGithubs:{
      display: 'flex',
      marginTop: 20,
    },
    githubLink:{
      margin: '0 30px',
      textAlign: 'center'
    },
    marginTB:{
      margin: '25px 0'
    },
    containGitAndSwagger:{
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      '@media (max-width: 992px)':{
        flexDirection: 'column',
        alignItems: 'center'
      }
    },
    containAllGithub:{
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    containSwagger:{
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    titles:{
      '@media (max-width: 500px)':{
        textAlign: 'center',
      }
    }
  }));

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'width-adjust')}>
      {/* <h1 style={{fontWeight: 500}}>Check my code!</h1> */}
      <div className={classes.containGitAndSwagger}>
        <div className={classes.containAllGithub}>
          <h1 style={{fontWeight: 600}} className={clsx(classes.marginTB, classes.titles)}>Check my code!</h1>
          <div className={classes.containGithubs}>
            <div className={classes.githubLink}>
              <IconButton href="https://github.com/AndresParraR/dashboardVue/" target="_blank" aria-label="delete">
                <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
              </IconButton>
              <h4>Vue Project</h4>
            </div>
            <div className={classes.githubLink}>
              <IconButton href="https://github.com/AndresParraR/monitoringReact/" target="_blank" aria-label="delete">
                <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
              </IconButton>
              <h4>React Project</h4>
            </div>
          </div>
        </div>
        <div className={classes.containSwagger}>
          <h1 style={{margin: '30px 0', fontWeight: 600}} className={classes.titles}>Check my API</h1>
          <IconButton href="https://briefcase-api-node.herokuapp.com/api-docs/" target="_blank">
            <img style={{width: 80, height: 80}} src={swaggerIcon} alt="Swagger" />
          </IconButton>
          <h4>Swagger</h4>
        </div>
      </div>
    </div>
  )
}

export default memo(ProjectsGit);