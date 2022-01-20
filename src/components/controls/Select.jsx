import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from "@material-ui/core";


const Select = (props) => {
    const { name, label, value, error=null, onChange, options } = props
    return (
        <div>
            <FormControl variant="outlined"
                {...(error && { error: true, helperText: error })}
            >
                <InputLabel>{label}</InputLabel>
                <MuiSelect
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    <MenuItem value="">None</MenuItem>
                    {
                        options.map(
                            item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                        )
                    }
                </MuiSelect>
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </div>
    );
}

export default Select;