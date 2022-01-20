import { makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    }

}));

const RightBar = () => {
  const classes = useStyles();
  return <Container className={classes.container}>Right Bar</Container>
}

export default RightBar;