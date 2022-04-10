import React from 'react';
import Navbar from './Navbar';
import {Box, Grid, Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/javascript-fullstack.jpg';
import project3 from '../images/mern-stack.jpg';
import project4 from '../images/react-redux.jpg';

const useStyles = makeStyles(theme=>({
    mainContainer: {
      height: "100%",
      background: '#233'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '5rem auto'
    }
}));

const Portfolio = () => {
    const classes = useStyles();
  return (
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justifyContent='center'>
            {/* Project 1 */}
            <Grid item xs={12} md={6} sm={8}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="project 1" height="140" image={project1} />
                        <CardContent>
                            <Typography gutterBottom variant='h5'>Project 1</Typography>
                            <Typography variant='body2' color='textSecondary' component="p">Description</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' color='primary'>Share</Button>
                        <Button size='small' color='primary'>Live Demo</Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Project 2 */}
            <Grid item xs={12} md={6} sm={8}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="project 2" height="140" image={project2} />
                        <CardContent>
                            <Typography gutterBottom variant='h5'>Project 2</Typography>
                            <Typography variant='body2' color='textSecondary' component="p">Description</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' color='primary'>Share</Button>
                        <Button size='small' color='primary'>Live Demo</Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Project 3 */}
            <Grid item xs={12} md={6} sm={8}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="project 3" height="140" image={project3} />
                        <CardContent>
                            <Typography gutterBottom variant='h5'>Project 3</Typography>
                            <Typography variant='body2' color='textSecondary' component="p">Description</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' color='primary'>Share</Button>
                        <Button size='small' color='primary'>Live Demo</Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Project 4 */}
            <Grid item xs={12} md={6} sm={8}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="project 4" height="140" image={project4} />
                        <CardContent>
                            <Typography gutterBottom variant='h5'>Project 4</Typography>
                            <Typography variant='body2' color='textSecondary' component="p">Description</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' color='primary'>Share</Button>
                        <Button size='small' color='primary'>Live Demo</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
      </Box>
  )
}

export default Portfolio;