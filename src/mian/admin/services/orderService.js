import axios from 'axios';

const apiEndpoint = "http://localhost:3900/api/orders";

export const getOrders = async() => {
    const { data } = await axios.get(apiEndpoint);
    return data
}

export const getOrder = async(orderId) => {
    const { data } = await axios.get(apiEndpoint + '/' + orderId)
    return data
}

export const deleteStaff = async(orderId) => {
    const { data } = await axios.delete(apiEndpoint + '/' + orderId) 
    return data
}


