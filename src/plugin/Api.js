import axios from "axios";

const api = axios.create({
  baseURL: "https://market-final-project.herokuapp.com",
});

export default api;
