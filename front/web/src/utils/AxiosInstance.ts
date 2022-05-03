import axios from "axios";

const targetUrl = process.env.SERVER_URL;

const AxiosInstance = axios.create();

export default AxiosInstance;
