import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Container from '@material-ui/core/Container';
import TopBar from './topBar';
import { getOrders } from './services/orderService';
import OrderTable from './orderTable';
import { getPizza } from './services/pizzaService';


const styles = theme =>({
    orderPageContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#eaeff1',
    },
    notificationBody: {
        marginTop: '50px',
        height: '500px'
    }
})

class OrderNotification extends Component {
    state = { 
        orders: []
     }
    
    async componentDidMount() {
        const orders = await getOrders();
        this.setState({ orders })
    }

    async getPizzaName(pizzaId) {
        const pizza = await getPizza(pizzaId)
        const pizzaName = pizza.name
        return pizzaName
    }
     
    render() { 
        const {classes} = this.props; 
        return ( 
            <div className={classes.orderPageContainer}>
            <Grid container justify='center'>
              <TopBar />
                <Grid item container md={10} xs={10} direction ='row' className={classes.notificationBody}>
                        <Grid item container xs={3}>
                            <Container>
                            <Paper>
                                <MenuList>
                                    <MenuItem>New Order</MenuItem>
                                    <MenuItem>Completed</MenuItem>
                                    <MenuItem>All</MenuItem>
                                </MenuList>
                            </Paper>
                            </Container>
                        </Grid>
                        <Grid item container xs={9}>
                        <Container>
                            <OrderTable 
                                orders={this.state.orders}
                                getPizzaName={this.getPizzaName}
                            />
                        </Container>
                        </Grid>
                </Grid>
            </Grid>
        </div>
         );
    }
}
 
export default withStyles(styles)(OrderNotification);