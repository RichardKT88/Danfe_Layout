import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

export function useForm(initialValues, validateOnChange = false, validate) {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })      
    }

    const resetForm = () => {
        setValues(initialValues);
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {

    const classes = useStyles();
    //O children refere-se ao que está dentro do <Grid container> já o ...other refere-se ao onSubmit da UsersForm 
    const {children, ...other} = props;
    return (
        <form className={classes.root} autoComplete='off' {...other}>
            {props.children}
        </form>
    )
}