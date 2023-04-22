import axios from "axios";

const baseUrl = "http://192.168.0.167:3000/";

axios.defaults.baseURL = baseUrl;

export { axios as nativeAxios };
