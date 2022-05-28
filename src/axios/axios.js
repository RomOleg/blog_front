import axios from "axios";
import { baseUrl } from "../../config";

const Axios = axios.create({
    baseURL: `${baseUrl}/api`,
    headers: {"Content-type": "application/json"},
    withCredentials: true,
  });

  export default Axios;