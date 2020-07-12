import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TopBar from './topBar';
import OrderTable from './common/orderProcessTable';
import { getOrder } from './services/orderService'

const styles = theme =>({
    orderProcessPageContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#eaeff1',
    },
    stepperContainer: {
        marginTop: '50px',
        
    },
    tableContainer: {
        marginTop: '50px'
    },
    buttonContainer: {
        marginTop: '50px'
    }
})

class OrderProcessMenu extends Component {
    state = { 
        activeStep: 0,
        order: []
     }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const order = await getOrder(id);
        this.setState({ order })
    }

    getSteps = () => {
        return ['Dough','Adding Sauce', 'Adding Ingredients', 'Baking', 'Boxing'];
        
    }

    handleNext = () => {
        const activeStep = this.state.activeStep + 1
        this.setState({activeStep})
        this.handleFinnsh()
    }

    handleBack = () => {
        const activeStep = this.state.activeStep - 1
        this.setState({activeStep})
    }

    handleFinnsh = () => {
        if(this.state.activeStep + 1 !== this.getSteps().length) return;
        // await deleteOrder(this.props.match.params.id)
        this.props.history.push("/order");
    }

    render() { 
        const {classes} = this.props;
        const steps = this.getSteps(); 
        return ( 
            <div className={classes.orderProcessPageContainer}>
            <Grid container justify='center'>
              <TopBar />
                <Grid item container md={10} xs={10} justify='center'>
                    <Grid item container xs={12}>
                        <Container className={classes.stepperContainer}>
                        <Stepper activeStep={this.state.activeStep} alternativeLabel>
                            {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                            ))}
                        </Stepper>
                        </Container>
                    </Grid>
                    <Grid item container xs={10}>
                        <Container className={classes.tableContainer}>
                            <OrderTable 
                                order={this.state.order}
                            />
                        </Container>
                    </Grid>
                    <Grid item container xs={12}>
                        <Container className={classes.buttonContainer}>
                            <Button
                                variant="contained" 
                                disabled={this.state.activeStep === 0}
                                onClick={this.handleBack}
                                // className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                disabled={this.state.activeStep === steps.length} 
                                onClick={this.handleNext}>
                                {this.state.activeStep >= steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Container>
                    </Grid>
                </Grid>
            </Grid>
        </div>
         );
    }
}
 
export default withStyles(styles)(OrderProcessMenu);