import axios from "axios";

const targetUrl = process.env.SERVER_URL;


//http://221.156.243.131:8080
const AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

export default AxiosInstance;
