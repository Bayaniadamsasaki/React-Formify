//import axios
import axios from 'axios';

const ApiService = axios.create({
    //set default endpoint API
    baseURL: 'http://localhost:5173/'
})

export default ApiService;