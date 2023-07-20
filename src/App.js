import logo from "./logo.svg";
import "./App.css";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { Button } from '@material-ui/core';


function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimay" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragrah>
              Hello everyone this is a photo album
            </Typography>
            <div>
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
      </main>
    </>
  );
}

export default App;
