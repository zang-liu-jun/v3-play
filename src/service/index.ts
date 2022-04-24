import axios from "axios";

const baseURL = "";

const instance = axios.create({
  baseURL,
  timeout: 5000,
});

export { baseURL };
export default instance;
