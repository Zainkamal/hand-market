import axios from "axios";

const api = axios.create({
  baseURL: "https://market-final-project.herokuapp.com",
});
export const kategori = axios.create({
  baseURL: "http://market-final-project.herokuapp.com/seller/category",
});

export default api;
