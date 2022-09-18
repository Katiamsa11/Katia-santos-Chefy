import axios from "axios";
// function to change tabs titles dinamically
export const TabTitle = (newTitle) => {
  return (document.title = newTitle);
};
// formatted date to dd/mm/yyy
export const formatDate = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};


//API URL

const API_URL =
    process.env.REACT_APP_API_URL || "http://localhost:8080/chefs";

//API functions

export const fetchChefs = () => {
  return axios.get(API_URL);
};

export const fetchChefsById = (id) => {
  return axios.get(`${API_URL}/data/${id}`);
};