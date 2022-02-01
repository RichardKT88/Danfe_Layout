import { AppBar, Badge, makeStyles, Toolbar, Typography, Avatar } from "@material-ui/core";
import { Mail, Notifications } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root: {
        transform: 'translateZ(0)'
    },
    toolBar:{
        display: "flex",
        justifyContent:"space-between"
    },
    logoLarge: {
        display: "none",
        [theme.breakpoints.up("sm")]:{
            display: "block",
        },
    },
    logoSmall: {
        display: "block",
        [theme.breakpoints.up("sm")]:{
            display: "none",
        },
    },
    icons: {
        display: "flex",
        alignItems: "center"
    },
    badge:{
        marginRight: theme.spacing(2)
    }
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.root}>
            <Toolbar className={classes.toolBar}>                
                <Typography variant="h6" className={classes.logoLarge}>
                    DANFE Simplificada
                </Typography>
                <Typography variant="h6" className={classes.logoSmall} >
                    DANFE
                </Typography>
                <div className={classes.icons}>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <Notifications/>
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg" />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;