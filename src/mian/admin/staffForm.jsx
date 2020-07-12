import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Joi from "joi-browser";
import FormControl from '@material-ui/core/FormControl';
import TopBar from './topBar';
import Form from './common/form';
import { getStaff, saveStaff  } from './services/staffService'

const styles = theme =>({
    staffPageContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#eaeff1',
    },
    formField: {
        marginTop: '50px',
    },
    inputField: {
        marginTop: '50px',
    }
})

class StaffForm extends Form {
    state = { 
        info:{
            name:'',
            username:'',
            phone:'',
            password:''
        },
        errors:{}
     }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        if(id !=='new') this.editStaffInfo();
    }

    async editStaffInfo() {
        const id = this.props.match.params.id
        const staff = await getStaff(id)
        const info = this.staffModel(staff)
        this.setState({info})
        console.log(info)
    }

    staffModel = (staff) => {
        return {
            _id: staff._id,
            name: staff.name,
            username: staff.username,
            phone: staff.phone,
            password: staff.password
        }
    }

    doSubmit = async() => {
        await saveStaff(this.state.info)
        this.props.history.goBack();
    }

    schema = {
         _id: Joi.string(),
         name: Joi.string().required(),
         username:Joi.string().required().email().label('Email'),
         phone: Joi.number().required(),
         password: Joi.string().required()
     }

    render() {
        const {classes} = this.props; 
        return (
            <div className={classes.staffPageContainer}>
            <Grid container direction="column" alignItems='center'>
              <TopBar />
                <Grid item container md={9} xs={11} className={classes.formField}>
                    <FormControl fullWidth variant="outlined" onSubmit={this.handleSubmit}>
                        <Grid item container sm={8} direction="column">
                            {this.renderInput("name","Name")}
                        </Grid>
                        <Grid item container sm={8} direction="column" className={classes.inputField}>
                            {this.renderInput("username","Email")}
                        </Grid>
                        <Grid item container sm={8} direction="column" className={classes.inputField}>
                            {this.renderInput("phone","Phone")}
                        </Grid>
                        <Grid item container sm={8} direction="column" className={classes.inputField}>
                            {this.renderInput("password","Password", "password")}
                        </Grid>
                        <Grid item container sm={2} direction="column" className={classes.inputField}>
                            {this.renderButton("Submit")}
                        </Grid>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
         );
    }
}
 
export default withStyles(styles)(StaffForm);