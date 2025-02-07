import axios from "axios";

const headers = {
  "x-rapidapi-key": "90a7b3c2famsh1e6bf4a821532c5p10e954jsnf6874b2084ee",
  "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
};

const BASE_URL = "https://sky-scrapper.p.rapidapi.com/api";

const getAirportInfos = async (query) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${BASE_URL}/v1/flights/searchAirport`,
      params: {
        query: query,
        locale: "en-US",
      },
      headers,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getFlightsByTrip = async ({
  arrivalCity,
  departCity,
  departDate,
  flightClass,
  pax,
  returnDate,
  trip,
}) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${BASE_URL}/v2/flights/searchFlights`,
      params: {
        originSkyId: departCity.skyId,
        destinationSkyId: arrivalCity.skyId,
        originEntityId: departCity.entityId,
        destinationEntityId: arrivalCity.entityId,
        cabinClass: flightClass,
        adults: pax,
        sortBy: "best",
        currency: "USD",
        market: "en-US",
        countryCode: "US",
        date: departDate,
        return: returnDate,
      },
      headers,
    });
    return response.data.data.itineraries.slice(0, 25);
  } catch (error) {
    console.error(error);
  }
};

export { getFlightsByTrip, getAirportInfos };
