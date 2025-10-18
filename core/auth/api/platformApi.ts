import axios from 'axios';


const platformApi = axios.create({
    baseURL: 'localhost:8080'
})


export { platformApi };
