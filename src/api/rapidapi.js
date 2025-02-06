import axios from "axios";

export default axios.create({
  baseURL: "https://rapidapi.com/apiheya/api/v1/flights/getFlightDetails",
  headers: {
    "x-rapidapi-key": "90a7b3c2famsh1e6bf4a821532c5p10e954jsnf6874b2084ee",
    "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
  },
});
