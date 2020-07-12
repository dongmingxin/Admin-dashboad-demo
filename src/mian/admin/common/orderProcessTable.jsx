import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const OrderTable = (props) => {
    return ( 
        <TableContainer component={Paper}>
      <Table>
          <TableHead>
              <TableRow>
                <TableCell>Pizzas</TableCell>
                <TableCell>Ingredients</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {props.order.pizzas && props.order.pizzas.map(pizza => (
                <TableRow key={pizza._id}>
                   <TableCell>{pizza.name}</TableCell>
                   <TableCell>
                   {pizza.ingredients.map(i=>(
                     <li key={i._id}>{i.name}</li>
                   ))}
                   </TableCell>
                </TableRow>
              ))}
          </TableBody>
      </Table>
    </TableContainer>
     );
}
 
export default OrderTable;