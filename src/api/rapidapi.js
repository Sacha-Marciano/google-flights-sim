import axios from "axios";

const headers = {
  "x-rapidapi-key": "0b90b48737mshca5476d572ddcf5p155e9cjsnf16ca56d7cca",
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
        currency: "USD",
        market: "en-US",
        countryCode: "US",
        date: departDate,
        return: returnDate,
        limit: "50",
        sortBy: "price_low",
      },
      headers,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const getFlightdetails = async (sessionId, itinerayId, legs) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${BASE_URL}/v1/flights/getFlightDetails`,
      params: {
        itineraryId: itinerayId,
        legs: `[{"destination":"${legs?.destination}","origin":"${legs?.origin}","date":"${legs?.date}"}]`,
        sessionId: sessionId,
        adults: "1",
        currency: "USD",
        locale: "en-US",
        market: "en-US",
        cabinClass: "economy",
        countryCode: "US",
      },
      headers,
    });
    return response.data.data.itinerary;
  } catch (error) {
    console.error(error);
  }
};

export { getFlightsByTrip, getAirportInfos, getFlightdetails };
