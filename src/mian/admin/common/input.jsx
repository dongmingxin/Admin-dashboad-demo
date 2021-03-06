import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';


const Input = ({name, value, label, onChange, type, error}) => {
    return ( 
        <FormControl fullWidth variant="outlined" >
            <TextField
            type={type}
            label={label}
            name={name}
            value={value}
            onChange={onChange} 
            size="small">
            </TextField>
            {error && <Alert variant="outlined" severity="error" style={{marginTop:'5px'}}>
                {error}
            </Alert>}
        </FormControl>
     );
}
 
export default Input;