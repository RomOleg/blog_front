import axios from "axios";
import { baseUrl } from "../config";

const Axios = axios.create({
  baseURL: `${baseUrl}/api`,
  headers: {"Content-type": "application/json"},
  withCredentials: true,
});

Axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('AccessToken');
  if (token) {
    config.headers['Authorization'] = 'Bearer' + token;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default Axios;