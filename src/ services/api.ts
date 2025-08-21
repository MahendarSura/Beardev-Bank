import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Change later
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
