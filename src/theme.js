import { createTheme } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";

export const theme = createTheme({
    pallete: {
        primary: {
            main: blue,
        },
        secondary:{
            main: red,
        }
    },
    myButton: {
        backgroundColor: "red",
        color: 'white',
        border: "1px solid black",
    },
    
});