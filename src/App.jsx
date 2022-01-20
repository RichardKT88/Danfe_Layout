//import logo from './logo.svg';
// import './App.css';

import { CssBaseline, Grid, makeStyles } from "@material-ui/core";

import NavBar from './components/NavBar'
import LeftBar from './components/LeftBar';
// import Main from './components/main/Main';
// import RightBar from './components/rightBar/RightBar';
import Employees from './pages/Employees/Employees';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={10} xs={10}>  
          {/* <Main /> */}
          <Employees />
        </Grid>
        {/* <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid> */}
      </Grid>
      <CssBaseline/>
    </div>
  );
}

export default App;
