import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from '@material-ui/core/Button';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';


const useStyles = makeStyles((theme)=>({
    tableContainer: {
      maxHeight: '500px'
  },
}))


const OrderTable = (props) => {
    const classes = useStyles()
    const { orders, getPizzaName } = props
    return ( 
        <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
            <TableHead>
                <TableRow>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Order details</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map(order=>(
                    <TableRow key={order._id}>
                        <TableCell>{order.name}</TableCell>
                        <TableCell>{order.pizzas.map(pizza=>(
                        <Fragment key={pizza._id}>
                            <li key={pizza._id}>{`${pizza.name}`}</li>
                            {/* <p>{`ingredients ${pizza._id}`}</p>  */}
                        </Fragment> 
                        ))}</TableCell>
                        {/* <TableCell>{order.pizzas.map(pizza=>{
                            return pizza.ingredients.map(i=>(
                                <p>{i.name}</p>
                            ))
                        })}</TableCell> */}
                        <TableCell>
                            <Link style={{textDecoration:"none"}} to={`order/${order._id}`}>
                                <Button variant="contained" startIcon={<LocalPizzaIcon color='primary'/>}>Start</Button>
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </TableContainer>
     );
}
 
export default OrderTable;