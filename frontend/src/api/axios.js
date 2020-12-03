import axios from 'axios';

const { REACT_APP_BACKEND_URL } = process.env;
const axionsInstance = axios.create({
  baseURL: REACT_APP_BACKEND_URL,
});

export { axionsInstance as default };
