import React from 'react';
import { Link } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {paginate} from './paginate';



const useStyles = makeStyles((theme)=>({
    buttonMargin: {
        marginLeft: '20px',
    },
    tableContainer: {
      maxHeight: '500px'
  },
}))



const StaffTable = (props) => {
    const classes = useStyles()
    const {currentPage, pageSize, staffs, handleDelete, searchFilter, searchQuery} = props
    const filterdStaffs = searchFilter(staffs, searchQuery)
    
    const paginateRows = paginate(filterdStaffs, currentPage, pageSize)

    return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
          <TableHead>
              <TableRow>
                <TableCell>Staff Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Detail Page</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {paginateRows.map(row=>(
                <TableRow key={row.name}>
                   <TableCell>{row.name}</TableCell>
                   <TableCell align="right">{row.username}</TableCell>
                   <TableCell align="right">{row.phone}</TableCell>
                   <TableCell align="right">Detail Page</TableCell>
                   {/* <TableCell align="right">
                    {(row.attendence) ? 
                    <BeenhereIcon style={{color: "blue"}} /> : 
                      <CancelIcon style={{color: "red"}}/>}</TableCell> */}
                    <TableCell>
                    <Link style={{textDecoration:"none"}} to={`staff/${row._id}`}>
                      <Button
                          className={classes.buttonMargin}
                          variant="contained"
                          color="primary"
                          style={{color:"white"}}
                          startIcon={<EditIcon />}>
                          Edit
                      </Button>
                    </Link>
                    <Button 
                        className={classes.buttonMargin}
                        onClick={() => handleDelete(row)}
                        variant="contained"
                        color="secondary"
                        style={{color:"white"}}
                        startIcon={<DeleteIcon />}>
                        Delete
                      </Button>
                      </TableCell>
               </TableRow>

            ))}
          </TableBody>
      </Table>
    </TableContainer>
     );
}
 
export default StaffTable;