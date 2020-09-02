import axios from 'axios';

const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
const axionsInstance = axios.create({
  baseURL: API_BASE_URL,
});

export { axionsInstance as default };
