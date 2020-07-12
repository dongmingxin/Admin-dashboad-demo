import axios from 'axios';

const apiEndpoint = "http://localhost:3900/api/staffs"

export const getStaffs = async() => {
    const { data } = await axios.get(apiEndpoint);
    return data
}

export const getStaff = async(staffId) => {
    const { data } = await axios.get(apiEndpoint + '/' + staffId)
    return data
}

export const saveStaff = async(staff) => {
    if(staff._id) {
        const body = {...staff}
        delete body._id
        return await axios.put(apiEndpoint + '/' + staff._id, body)
    }
    return await axios.post(apiEndpoint, staff)
    
}


export const deleteStaff = async(staffId) => {
    const { data } = await axios.delete(apiEndpoint + '/' + staffId) 
    return data
}