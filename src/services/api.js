import axios from 'axios';

const api = axios.create({
    baseURL: 'http://143.0.124.84:3333'
});

export default api;