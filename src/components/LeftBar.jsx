import { Container, makeStyles, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        width: '320px',
        left: '0px',
        height: "100%",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "#808080",
            color: "#fff",
            border: "1px solid #999",
        },
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
        },
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    }

}));

const LeftBar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Tela 1</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Tela 2</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Tela 3</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Tela 4</Typography>
            </div>


        </Container>
    );
}

export default LeftBar;
