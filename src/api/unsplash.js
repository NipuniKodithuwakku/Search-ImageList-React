import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:' Client-ID xHbw6-oFjZsB0AdzVLQ2jflnRZ3T7N3FnKmIQlyX518'
    }
});