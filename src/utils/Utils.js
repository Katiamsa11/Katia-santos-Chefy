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

const API_URL = "http://localhost:8080";
const API_URL_CHEFS = `${API_URL}/chefs`;
const API_URL_IMAGES = `${API_URL}/images`;
const API_URL_REVIEWS = `${API_URL}/reviews`;

//API functions

export const fetchChefs = () => {
  return axios.get(API_URL_CHEFS);
};

export const fetchChefsById = (id) => {
  return axios.get(`${API_URL_CHEFS}/data/${id}`);
};
//fetching images
export const fetchImagesById = (id) => {
  return axios.get(`${API_URL_IMAGES}/${id}/image`);
};

//fetching chefs reviews
export const fetchReviewsById = (id) => {
  return axios.get(`${API_URL_REVIEWS}/${id}/review`);
};
