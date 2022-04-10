import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../images/avatar.png';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    avatar: {
      margin: theme.spacing(1),
      width: theme.spacing(15),
      height: theme.spacing(15)
    },
    title: {
        color: "tomato"
      },
    subTitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
  }));

const Header = () => {
  const classes = useStyles();

  return (
      <Box className={classes.typedContainer}>
          <Grid container justifyContent="center">
              <Avatar className={classes.avatar} src={avatar} alt="Cihan Sönmez"></Avatar>
          </Grid>
          <Typography className={classes.title} variant='h4'>
              <Typed strings={["Cihan Sönmez"]} typeSpeed={40}></Typed>
          </Typography>
          <br/>
          <Typography className={classes.subTitle} variant='h5'>
              <Typed strings={["Full Stack Software Developer", "tech stack 1" , "tech stack 2"]} typeSpeed={40} backSpeed={60} loop></Typed>
          </Typography>
      </Box>
  )
}

export default Header;