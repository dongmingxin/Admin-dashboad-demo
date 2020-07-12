import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import StaffTable from './staffTable';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import StaffPagination from './common/pagination';
import TopBar from './topBar';


const useStyles = makeStyles((theme)=>({
    staffPageContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#eaeff1'
    },
    tableSize: {
        width: '100%',
        marginTop: '25px',
    },
    searchStyle: {
        marginLeft: '20px',
        marginTop: '25px'
    },
    buttonSytle: {
        height: '30px',
        marginTop: '40px',
        marginLeft: '10px'
    },
    paginationStyle: {
        marginTop: '20px'
    },
    addStaffButton: {
        marginBottom: '20px',
        textDecoration: 'none',
    }
}))

const StaffPage = (props) => {
    const classes = useStyles();
    const {staffs, searchQuery, handleSearch, searchFilter} = props;
    return ( 
        <div className={classes.staffPageContainer}>
            <Grid container direction="column" alignItems='center'>
              <TopBar />
                <Grid item container xs={12} >
                    <TextField value = {searchQuery} onChange = {handleSearch} className={classes.searchStyle} id="standard-search" label="Search Staff Name" type="search" />
                    <Button variant="contained" startIcon={<SearchIcon/>} className={classes.buttonSytle}>Search</Button>
                </Grid>
                <Grid item container xs={11} sm={11} md={10} className={classes.tableSize}>
                    <Link style={{textDecoration:"none"}} to="staff/new" >
                        <Button 
                            variant="contained" 
                            startIcon={<PersonAddIcon />} 
                            className={classes.addStaffButton}>
                            Add New Staff
                        </Button>
                    </Link>
                    <StaffTable 
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        staffs={staffs}
                        handleDelete={props.handleDelete}
                        searchFilter={searchFilter}
                        searchQuery={searchQuery}
                    />
                </Grid>
                <Grid item container xs={10} className={classes.paginationStyle}>
                    <StaffPagination 
                    pageSize={props.pageSize} 
                    itemCount={staffs.length} 
                    onPageChange={props.handlePageChange}
                    currentPage={props.currentPage}/>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default StaffPage;