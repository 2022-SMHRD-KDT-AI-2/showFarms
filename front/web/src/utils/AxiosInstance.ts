import axios from "axios";

const targetUrl = process.env.SERVER_URL;

const AxiosInstance = axios.create({
    baseURL: "http://121.147.185.200:8081"
});

export default AxiosInstance;
