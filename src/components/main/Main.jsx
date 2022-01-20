import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        backgroundColor: "#90ee90",
        height: "100vh",
        
    }

}));

const Main = () => {
  const classes = useStyles();
  return <Container className={classes.container}>Main</Container>
}

export default Main;