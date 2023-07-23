import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles ((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing (9,0,6)
  }
}));

export default useStyles;