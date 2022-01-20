import { TextField } from "@material-ui/core";

const Input = (props) => {
    const { name, label, value, error=null, onChange, ...other } = props
    return (
            <TextField
                variant="outlined"
                label= {label}
                name= {name}
                value={value}
                onChange={onChange}
                {...other}
                {...(error && {error:true, helperText:error})}
            />
    )
}

export default Input;