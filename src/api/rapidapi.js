import axios from "axios";

//cd37a89f-83f4-49e9-a88d-bf334f83a637

// lat 32.079872 long 34.7865088

const options = {
  method: "GET",
  url: "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights",
  params: {
    originSkyId: "LOND",
    destinationSkyId: "NYCA",
    originEntityId: "27544008",
    destinationEntityId: "27537542",
    cabinClass: "economy",
    adults: "1",
    sortBy: "best",
    currency: "USD",
    market: "en-US",
    countryCode: "US",
    date: "2025-06-06",
  },
  headers: {
    "x-rapidapi-key": "90a7b3c2famsh1e6bf4a821532c5p10e954jsnf6874b2084ee",
    "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
  },
};

const getFlights = async () => {
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// const getAirport = async () => {

// }

export { getFlights };
