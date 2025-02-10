import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://restaurant.delino.com/",
  timeout: 20000,
  headers: {},
});
