//import logo from './logo.svg';
// import './App.css';

import { CssBaseline, Grid, makeStyles, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

import NavBar from './components/NavBar'
import LeftBar from './components/LeftBar';
import Employees from './pages/Employees/Employees';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '300px',
    width: '100%'
  }
})

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
        <LeftBar />
      <div className={classes.appMain}>
        <NavBar />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
