import axios from "axios";
// import store from "../store";

const api = axios.create({
  baseURL: "https://client-api1.herokuapp.com/", //  "thtps://client-api1.herokuapp.com/", http://localhost:5000/
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
    if (token) {
      // asign token to the headers

      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
