import { test, expect} from '@playwright/test';
import apiData from '../data/apiData'

const { faker } = require('@faker-js/faker')
const {DateTime } = require ('luxon')

test.describe('RESTFUL BOOKER API', () =>{
    test('Create Token', async ({request}) =>{
          const response = await request.post(apiData.apiURL+'/auth', {
            data: {
                "username": process.env.USERNAME,
                "password": process.env.PASSWORD
            }
        })
        expect(response.ok()).toBeTruthy()
        expect(response.status()).toBe(200)
    
        const responseBody = await response.json()
     });
    test.afterAll('Delete The Updated User', async({request}) =>{
     const resp = await request.delete(apiData.apiURL+'/booking/2')
     expect(resp.status()).toBe(200);
     });
    test('GET - Get All Bookings', async ({ request}) => {
     const resp = await request.get(apiData.apiURL+'/booking')
     const booking = await resp.json();
     //CONFIRM API RESPONSE STATUS
     expect(resp.ok()).toBeTruthy();
     expect(resp.status()).toBe(200);
          
     //CONFIRM RESPONSE OUTPUT
     expect(booking).toBeDefined();
     });
   test('GET - Get Specific Booking', async ({ request}) => {
     const bookingId = faker.string.numeric(1)
     const resp = await request.get(apiData.apiURL+'/booking/'+bookingId)
     
     const booking = await resp.json();
     
     //CONFIRM API RESPONSE STATUS
     expect(resp.ok()).toBeTruthy();
     expect(resp.status()).toBe(200);
          
     //CONFIRM RESPONSE OUTPUT
     expect(booking).toBeDefined();
     expect(booking["firstname"]).not.toBeNull()
     expect(booking["lastname"]).not.toBeNull()
     expect(booking["totalprice"]).not.toBeNaN()
     expect(booking["bookingdates"]).not.toBeNull()
     });
   test('GET - Filter Bookings By Name', async ({request}) => {
     const resp = await request.get(apiData.apiURL+'/booking?firstname=Jim&lastname=Jones')
     const booking = await resp.json();
     
     //CONFIRM API RESPONSE STATUS
     expect(resp.ok()).toBeTruthy();
     expect(resp.status()).toBe(200);

     //BOOKING DETAILS FOR UNIQUE BOOKING ID
     expect(booking["firstname"]).not.toBeNull()
     expect(booking["lastname"]).not.toBeNull()
     expect(booking["totalprice"]).not.toBeNaN()
     expect(booking["bookingdates"]).not.toBeNull()
     });
   test('GET - Filter By Reservation Date', async ({request}) => {
     const resp = await request.get(apiData.apiURL+'/booking?checkin=2018-01-01&checkout=2019-01-01')
     const bookings = await resp.json();

     //CONFIRM API RESPONSE STATUS
     expect(resp.ok()).toBeTruthy();
     expect(resp.status()).toBe(200);
     expect(bookings).toBeDefined();

     });
   test('POST - Create A Booking', async({request}) => {
     const randomFirstName = faker.person.firstName()
     const randomLastName = faker.person.lastName()
     const randomPrice = faker.string.numeric(4)
     const currentDate = DateTime.now().toFormat('yyyy-MM-dd')
     const inFiveDays = DateTime.now().plus({ days: 5 }).toFormat('yyyy-MM-dd')

     const resp = await request.post(apiData.apiURL+'/booking', {
          data: 
          {
               "firstname": randomFirstName,
               "lastname": randomLastName,
               "totalprice": randomPrice,
               "depositpaid": true,
               "bookingdates": {
                    "checkin": currentDate,
                    "checkout": inFiveDays
               },
               "additionalneeds": "Breakfast"
          }
     });

        expect(resp.ok()).toBeTruthy();
        expect(resp.status()).toBe(201);
        
        const respBody = await resp.json()
        expect(respBody.booking).toHaveProperty("firstname",randomFirstName);
        expect(respBody.booking).toHaveProperty("lastname", randomLastName);
        expect(respBody.booking['price']).not.toBeNaN;
     });
   test('PUT - Update A Booking', async({request}) => {
     const updateRequest = await request.put(apiData.apiURL+'/booking/2', {
          data: {
               "firstname": "Wade",
               "lastname": "Wilson",
               "totalprice": 247,
               "depositpaid": true,
               "bookingdates": {
               "checkin": "2023-06-01",
               "checkout": "2023-06-15"
               },
               "additionalneeds": "Chimichangas"
               },
          });
    
        expect(updateRequest.ok()).toBeTruthy();
        expect(updateRequest.status()).toBe(200);
        
        const updatedResponseBody = await updateRequest.json()
        expect(updatedResponseBody).toHaveProperty("firstname", "Wade");
        expect(updatedResponseBody).toHaveProperty("lastname", "Wilson");
        expect(updatedResponseBody).toHaveProperty("totalprice", 247);
        expect(updatedResponseBody).toHaveProperty("depositpaid", true);

     });
   test('PATCH - Partial Update To A Booking', async({request}) => {
       const updateRequest = await request.patch(apiData.apiURL+'/booking/2', {
          data: {
               "firstname": "George",
               "lastname": "Washington"
               }
          });
        expect(updateRequest.ok()).toBeTruthy();
        expect(updateRequest.status()).toBe(200);

        //CONFIRM UPDATE
       const resp = await request.get(apiData.apiURL+'/booking/2')
       const booking = await resp.json();

       expect(booking).toHaveProperty("firstname", "George");
       expect(booking).toHaveProperty("lastname", "Washington");
     });
});