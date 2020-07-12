import React, { Component } from 'react';
import Input from './input';
import Button from '@material-ui/core/Button';
import Joi from "joi-browser";

class Form extends Component {
    state = { 
        info:{},
        errors:{}
     }

    validate = () => {
        const { error } = Joi.validate(this.state.info, this.schema, {abortEarly: false});
        if (!error) return null;
        const errors = {};
        error.details.map(e=> errors[e.path[0]]= e.message);
        return errors
    }
     

    handleChange = (e) => {
        const info = {...this.state.info}
        info[e.currentTarget.name] = e.currentTarget.value
        this.setState({ info })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {}});
        if (errors) return
        this.doSubmit();
        
    }

    renderInput(name, label, type='text') {
        return <Input
            name={name}
            value={this.state.info[name]}
            label={label}
            onChange={this.handleChange}
            type={type}
            error={this.state.errors[name]}
        />
    }

    renderButton(label) {
        return <Button variant="contained" onClick={this.handleSubmit}>{label}</Button>
    }
}
 
export default Form;