import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ImgCover from './image/img-cover.jpg';
import { Card, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

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
    color: "#fff",
    fontSize: "4rem",

  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    color: "#fff"
  },
  cardArticle: {
    backgroundColor: "#25282c",
    color: "#9ca9b3"
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
                    Here I present a practical guide on React JS, the famous “omnipresent framework”, as the community likes to call it, for being so present in our day to day applications.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
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
                    Here I present a practical guide on React JS, the famous “omnipresent framework”, as the community likes to call it, for being so present in our day to day applications.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
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
                    Here I present a practical guide on React JS, the famous “omnipresent framework”, as the community likes to call it, for being so present in our day to day applications.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
