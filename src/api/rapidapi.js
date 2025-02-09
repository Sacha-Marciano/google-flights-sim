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

// 3dfd4e87-aae0-4f54-af94-7aaab0995779
// 10413-2502100700--32356,-32032-1-12712-2502101450

// get flight by id
const options = {
  method: "GET",
  url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/getFlightDetails",
  params: {
    itineraryId: "10413-2502100700--32356,-32032-1-12712-2502101450",
    legs: '"[{"destination":"JFK","origin":"CDG","date":"2025-02-10"}]"',
    sessionId:
      "Cl0IARJZCk4KJGEzOWFjMGEzLTgwZDEtNDVhZi1iNGE4LTRlNTEyYzI5ZTA2ORACGiQxZWZiODJhMC0zZmQwLTQxY2QtYTQ0ZS0xN2Y5YmIxNzVjZmIQloqZ0M4yGAESKHVzc19mMjJkZmFiNS1lNWI4LTQ4YjUtYmRhNi1hZjljN2U3MjNlY2EiAlVT",
    adults: "1",
    currency: "USD",
    locale: "en-US",
    market: "en-US",
    cabinClass: "economy",
    countryCode: "US",
  },
  headers: {
    "x-rapidapi-key": "0b90b48737mshca5476d572ddcf5p155e9cjsnf16ca56d7cca",
    "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
  },
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

// https://sky-scrapper.p.rapidapi.com/api/v1/flights/getFlightDetails?itineraryId=10413-2502100700--32356,-32032-1-12712-2502101450&legs=%22[%7B%22destination%22:%22JFK%22,%22origin%22:%22CDG%22,%22date%22:%222025-02-10%22%7D]%22&sessionId=Cl0IARJZCk4KJGEzOWFjMGEzLTgwZDEtNDVhZi1iNGE4LTRlNTEyYzI5ZTA2ORACGiQxZWZiODJhMC0zZmQwLTQxY2QtYTQ0ZS0xN2Y5YmIxNzVjZmIQloqZ0M4yGAESKHVzc19mMjJkZmFiNS1lNWI4LTQ4YjUtYmRhNi1hZjljN2U3MjNlY2EiAlVT&currency=USD
