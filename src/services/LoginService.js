import axios from "axios";

const API_URL = "https://spring-boot-app-flats.herokuapp.com/login";

export const handleLogin = ({ login, password }) => {
  return axios.post(API_URL, {
    login: login,
    password: password,
  });
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};
