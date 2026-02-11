import http from 'k6/http';
import { check } from 'k6';


//TEST DATA
const apiURL = 'https://restful-booker.herokuapp.com/booking'
const headers = {"Content-Type": "application/json"};  
const payload = JSON.stringify({
    "firstname" : "George",
    "lastname" : "Washington",
    "totalprice" : 3000, 
    "depositpaid" : true,
    "bookingdates" : {
      "checkin" : "2025-12-20",
      "checkout": "2026-01-01",
    },
    "additionalneeds" : "more pillows",
});

//K6 EXPORTS
export const options = {
  scenarios: {
    new_booking: {
      executor: 'constant-arrival-rate',
      duration: '30s',
      preAllocatedVUs: 1, //50,
      rate: 1 , //50,
      timeUnit: '1s',
    },
  },
};

export default function() {
  const url = `${apiURL}`

  const res = http.post(url, { headers }, payload);

  check(res, {
    'Post status is 200': (r) => res.status === 200,
    'Post Content-Type header': (r) => res.headers['Content-Type'] === 'application/json',
    'Post Booking is paid in full': (r) => res.json().depositpaid === true
  });
};

