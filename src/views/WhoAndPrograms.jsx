import React, { useState, memo } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Badge, Button, Menu, MenuItem, Fade, Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

import DotNetIcon from 'mdi-react/DotNetIcon';

import flutter from '../assets/images/flutter.png'

library.add(fas, far, fab);

const WhoAndPrograms = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {

    },
    containWho:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '66.666667%',
      margin: 'auto'
    },
    containPrograms:{
      display: 'flex',
      flexWrap: 'wrap',
    },
    textWho:{
      fontSize: '1.5em',
      fontWeight: '400',
      textAlign: 'center',
      lineHeight: '1.5em',
      marginBottom: 70,
    },
    containProgramBase:{
      width: '100%',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 70,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      '@media(min-width: 600px)':{
        maxWidth: '33.333333%'
      }
    },
    titlesPrograms:{
      marginTop: 30,
      marginBottom: 15,
      fontSize: '1.125rem',
      lineHeight: '1.5rem'
    }
  }));

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'width-adjust', 'padding-section')}>
      <div className={classes.containWho}>
        <h1 className={classes.textWho}>
        I'm a passionate person for knowledge and learning new stuff; I like painting and drawing in my free time. I consider myself a person with good energy vibe, attitude and commitment. I work out every day, also trying to live my life with passion, every minute count.
        </h1>
      </div>
      <div className={classes.containPrograms}>
        <div className={classes.containProgramBase}>
          <FontAwesomeIcon style={{color: "#61dafb"}} icon={['fab', 'react']} size="3x" />
          <h4 className={classes.titlesPrograms}>React JS</h4>
          {/* <div>
            Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour.
          </div> */}
        </div>
        <div className={classes.containProgramBase}>
          <FontAwesomeIcon style={{color: "#dd0031"}} icon={['fab', 'angular']} size="3x" />
          <h1 className={classes.titlesPrograms}>Angular JS</h1>
          {/* <div>
            Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour.
          </div> */}
        </div>
        <div className={classes.containProgramBase}>
          <FontAwesomeIcon style={{color: "#42b983"}} icon={['fab', 'vuejs']} size="3x" />
          <h1 className={classes.titlesPrograms}>Vue JS</h1>
          {/* <div>
            Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour.
          </div> */}
        </div>
        <div className={classes.containProgramBase}>
          <FontAwesomeIcon style={{color: "#42b983"}} icon={['fab', 'node-js']} size="3x" />
          <h1 className={classes.titlesPrograms}>Node JS</h1>
          {/* <div>
            Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour.
          </div> */}
        </div>
        <div className={classes.containProgramBase}>
          <DotNetIcon color="#512bd4" size={'3em'}/>
          <h1 className={classes.titlesPrograms}>.Net</h1>
          {/* <div>
            Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour.
          </div> */}
        </div>
        <div className={classes.containProgramBase}>
          <img style={{width: 60, height:60}} src={flutter} alt="" />
          <h1 className={classes.titlesPrograms}>Dart & Flutter</h1>
          {/* <div>
            Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour.
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default memo(WhoAndPrograms)