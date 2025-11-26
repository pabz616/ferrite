import { test, expect} from '@playwright/test';
import apiData from '../data/apiData'
const { faker } = require('@faker-js/faker')

test.describe('RESTFUL BOOKER API', () =>{
    test('GET - Get All Bookings', async ({ request}) =>{
    const resp = await request.get(apiData.apiURL+'/booking')
    const bookings = await resp.json();
     //CONFIRM API RESPONSE STATUS
     expect(resp.ok()).toBeTruthy();
     expect(resp.status()).toBe(200);
     
     //CONFIRM RESPONSE OUTPUT
     expect(bookings).toBeDefined();
   });

test('GET - Get Specific Booking', async ({ request}) =>{
     const bookingId = faker.string.numeric(1)
     console.log(bookingId)
     const resp = await request.get(apiData.apiURL+'/booking/'+bookingId)
     const bookings = await resp.json();
     
     //CONFIRM API RESPONSE STATUS
     // expect(resp.ok()).toBeTruthy();
     expect(resp.status()).toBe(200);
          
     //CONFIRM RESPONSE OUTPUT
     // expect(bookings).toBeDefined();
     // expect(bookings["firstname"]).not.toBeNull()
     // expect(bookings["lastname"]).not.toBeNull()
     // expect(bookings["totalprice"]).not.toBeNaN()
     // expect(bookings["bookingdates"]).not.toBeNull()
   });

   test('GET - Filter Bookings By Name', async ({request}) =>{
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

   test('GET - Filter By Reservation Date', async ({request}) =>{
     const resp = await request.get(apiData.apiURL+'/booking?checkin=2018-01-01&checkout=2019-01-01')
     const bookings = await resp.json();

     //CONFIRM API RESPONSE STATUS
     expect(resp.ok()).toBeTruthy();
     expect(resp.status()).toBe(200);
     expect(bookings).toBeDefined();

   });
   
});