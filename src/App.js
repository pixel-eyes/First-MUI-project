import logo from "./logo.svg";
import "./App.css";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardGrid,
  CssBaseline,
  Grid,
  Toolbar,
  Footer,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimay"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragrah
            >
              Step into a world of treasured memories and heartwarming emotions
              as we invite you to embark on a captivating journey through our
              photo album.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary section
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />

                  <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card.You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterbottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer the purpose!
        </Typography>
      </footer>
    </>
  );
};

export default App;
