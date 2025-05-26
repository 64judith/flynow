// // getFlights.js
// const fetch = require('node-fetch');

// // Replace with your actual Aviationstack API Key
// const AVIATIONSTACK_API_KEY = 'YOUR_AVIATIONSTACK_API_KEY';

// const departureAirport = 'LOS'; // Lagos
// const arrivalAirport = 'PHC';   // Port Harcourt
// const flightDate = '2025-06-15'; // Example date: June 15, 2025 (YYYY-MM-DD)

// async function getAvailableFlights(depIata, arrIata, date) {
//     const url = `http://api.aviationstack.com/v1/flights?access_key=${AVIATIONSTACK_API_KEY}&dep_iata=${depIata}&arr_iata=${arrIata}&flight_date=${date}&flight_status=scheduled`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.error) {
//             console.error('Aviationstack API Error:', data.error.message);
//             return [];
//         }

//         if (data.data && data.data.length > 0) {
//             console.log(`Available flights from ${depIata} to ${arrIata} on ${date}:`);
//             data.data.forEach(flight => {
//                 const departure = flight.departure;
//                 const arrival = flight.arrival;
//                 const airline = flight.airline;
//                 const flightNumber = flight.flight.number;

//                 console.log(`
//                     Airline: ${airline.name}
//                     Flight Number: ${flightNumber}
//                     Departure: ${departure.airport} (${departure.iata}) at ${departure.scheduled}
//                     Arrival: ${arrival.airport} (${arrival.iata}) at ${arrival.scheduled}
//                     Status: ${flight.flight_status}
//                 `);
//             });
//             return data.data;
//         } else {
//             console.log(`No direct flights found from ${depIata} to ${arrIata} on ${date}.`);
//             return [];
//         }
//     } catch (error) {
//         console.error('Error fetching flight data:', error.message);
//         return [];
//     }
// }

// // Call the function to get flights
// getAvailableFlights(departureAirport, arrivalAirport, flightDate);