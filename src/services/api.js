import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.tibia.com',
});

export default api;
