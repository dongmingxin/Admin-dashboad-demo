import axios from 'axios';

const api = "http://localhost:3900/api/pizzas";



export const getPizza = async(pizzaId) => {
    const { data } = await axios.get(api + '/' + pizzaId)
    const pizzaName = data.name
    return pizzaName
}
