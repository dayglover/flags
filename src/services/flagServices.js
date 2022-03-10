import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getAllCountries() {
    return apiClient.get(`/all`);
  },
  getSingleCountry(country) {
    return apiClient.get(`/name/${country}?fullText=true`);
  },
};
