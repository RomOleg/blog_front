import axios from "axios";
import { baseUrl } from "../config";

const Axios = axios.create({
  baseURL: `${baseUrl}/api`,
  headers: {"Content-type": "application/json"},
  withCredentials: true,
});

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = localStorage.getItem('AccessToken');
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default Axios;