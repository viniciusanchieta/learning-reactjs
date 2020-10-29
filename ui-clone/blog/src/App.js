import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Avatar, Card, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import AvatarVinicius from './image/avatar-vinicius.jpg';
import ImgCover from './image/img-cover.jpg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#25282c"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${ImgCover})`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#9ca9b3",
    fontSize: "4rem",

  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 700,
    paddingBottom: theme.spacing(3),
    color: "#9ca9b3"
  },
  cardArticle: {
    backgroundColor: "#25282c",
    color: "#9ca9b3",
    maxWidth: "100%"
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex",

  },
  date: {
    color: "#4f5355"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App" style={{ backgroundColor: '#151719', }}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            BlogDev
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>
          From dev to the World
        </Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
          </Typography>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.cardArticle}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    A guide to using ReactJS
                  </Typography>
                  <Typography variant="body2" component="p">
                  Airbnb releases visx 1.0, the React Core Team writes about the new JSX Transform, and the complete guide to Next.js authentication.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={AvatarVinicius} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Vinicius Anchieta
                    </Typography>
                    <Typography className={classes.date} variant="subtitle2" color="textSecondary" component="p">
                      October 29, 2020
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.cardArticle}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://www.mundojs.com.br/wp-content/uploads/2018/10/maxresdefault-1232x693.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    A guide to using NextJS
                  </Typography>
                  <Typography variant="body2" component="p">
                    This is a newsletter focused about Next.js, which is a modern React framework, combining a dual backend and frontend JavaScript API into a single project.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={AvatarVinicius} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Vinicius Anchieta
                    </Typography>
                    <Typography className={classes.date} variant="subtitle2" color="textSecondary" component="p">
                      October 24, 2020
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.cardArticle}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    A guide to using NodeJS
                  </Typography>
                  <Typography variant="body2" component="p">
                  Technology progresses at such a breakneck pace that keeping up with it requires dedicated and ongoing effort.</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={AvatarVinicius} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Vinicius Anchieta
                    </Typography>
                    <Typography className={classes.date} variant="subtitle2" color="textSecondary" component="p">
                      October 20, 2020
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
