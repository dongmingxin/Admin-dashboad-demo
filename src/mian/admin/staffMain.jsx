import React, { Component } from 'react';
import StaffPage from './staff';
import { getStaffs, deleteStaff } from './services/staffService';

class StaffMain extends Component {
    state = {
        staffs: [], 
        currentPage: 1,
        pageSize: 6,
        searchQuery: "",
     }

    async componentDidMount() {
        const staffs = await getStaffs();
        this.setState({ staffs })
    }
     
    handlePageChange = page => {
        this.setState({currentPage: page})
    }

    handleSearch = query => {
        const searchQuery = query.target.value
        this.setState({searchQuery})
    }

    searchFilter = (staffs,searchQuery) => {
        if(!searchQuery) return staffs
        const filteredStaffs = staffs.filter(s=>s.name.toLowerCase().startsWith(searchQuery.toLowerCase()))
        return filteredStaffs
    }

    handleDelete = async staff => {
        const original = this.state.staffs
        const staffs = this.state.staffs.filter(s=>s._id !== staff._id)
        this.setState({staffs})
        try{
            await deleteStaff(staff._id)
        }
        catch(e){
            this.setState({staffs: original})
        }
    }

    render() { 
    
        return ( 
            <StaffPage 
            currentPage={this.state.currentPage}
            pageSize={this.state.pageSize}
            handlePageChange={this.handlePageChange}
            staffs={this.state.staffs}
            handleDelete={this.handleDelete}
            searchQuery={this.state.searchQuery}
            handleSearch={this.handleSearch}
            searchFilter={this.searchFilter}
            />
         );
    }
}
 
export default StaffMain;