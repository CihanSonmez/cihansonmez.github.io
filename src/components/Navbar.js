import React, {useState} from 'react';
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon } from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import avatar from '../images/avatar.png';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const useStyles = makeStyles(theme=>({
  menusliderContainer: {
    width: 250,
    height: "100%",
    backgroundColor: '#511'
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "tan"
  }
}));

const menuItems = [
  {
    listIcon: <Home/>,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd/>,
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listIcon: <Apps/>,
    listText: "Portfolio",
    listPath: "/portfolio"
  },
  { 
    listIcon: <ContactMail/>,
    listText: "Contact",
    listPath: "/contact"
  }
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  })

  const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]: open })
  }

  const classes = useStyles()

  const sideList = slider => (
    <Box className={classes.menusliderContainer} component="div" onClick={toggleSlider(slider, false)}>
    <Avatar className={classes.avatar} src={avatar} alt="Cihan Sönmez" />
    <Divider/>
    <List>
      {menuItems.map((lsItem, key) => 
      (
        <ListItem button key={key} component={Link} to={lsItem.listPath}>
          <ListItemIcon className={classes.listItem}>
            {lsItem.listIcon}
          </ListItemIcon>
          <ListItemText className={classes.listItem} primary={lsItem.listText}>
          </ListItemText>
        </ListItem>
      ))}
    </List>
    </Box>
  )

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant='h5' style={{ color: "tan" }}>Menu</Typography>
            <MobilRightMenuSlider open={state.right} anchor="right" onClose={toggleSlider("right", false)}>
              {sideList("right")}
              <Footer/>
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar;