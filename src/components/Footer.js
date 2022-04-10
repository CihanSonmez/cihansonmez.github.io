import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { GitHub, LinkedIn, Twitter, Instagram} from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root":{
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root":{
            fill: "tan",
            "&:hover":{
                fill:"tomato",
                fontSize: "1.8rem"
            }
        }
    }
});

const Footer = () => {
  const classes = useStyles()
  return (
      <BottomNavigation width="auto" style={{background: "#222"}}>
          <BottomNavigationAction style={{padding: 0}} className={classes.root} icon={<LinkedIn/>}></BottomNavigationAction>
          <BottomNavigationAction style={{padding: 0}} className={classes.root} icon={<GitHub/>}></BottomNavigationAction>
          <BottomNavigationAction style={{padding: 0}} className={classes.root} icon={<Twitter/>}></BottomNavigationAction>
      </BottomNavigation>
  )
}

export default Footer;