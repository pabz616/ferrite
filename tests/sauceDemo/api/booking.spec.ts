import { test, expect, APIRequestContext } from '@playwright/test';
import { faker } from '@faker-js/faker';
const {DateTime } = require ('luxon')

// 1. TYPE DEFINITIONS
interface BookingDates {
  checkin: string;
  checkout: string;
}

interface Booking {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: BookingDates;
  additionalneeds?: string;
}

// 2. CONFIGURATION
const BASE_URL = process.env.BASE_URL

// 3. HELPER FUNCTIONS
const createRandomBookingBody = (): Booking => {
  return {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    totalprice: faker.number.int({ min: 100, max: 1000 }), // Correct faker method for numbers
    depositpaid: true,
    bookingdates: {
      checkin: DateTime.now().toFormat('yyyy-MM-dd'),
      checkout: DateTime.now().plus({ days: 5 }).toFormat('yyyy-MM-dd'),
    },
    additionalneeds: faker.word.noun(),
  };
};

// 4. TEST SUITE
// We use 'serial' because these tests depend on each other (Auth -> Create -> Update -> Delete)
test.describe.serial('RESTFUL BOOKER API - E2E Lifecycle', () => {
  let token: string;
  let bookingId: number;
  let sharedHeaders: { [key: string]: string };

  // BEFORE ALL: Authenticate
  test.beforeAll(async ({ request }) => {
    const response = await request.post(`${BASE_URL}/auth`, {
      data: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
      },
    });

    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    token = body.token;
    
    // Create a reusable header object for PUT/DELETE requests
    sharedHeaders = {
      'Cookie': `token=${token}`,
      'Accept': 'application/json'
    };
  });

  test('POST - Create A New Booking (Happy Path)', async ({ request }) => {
    const bookingData = createRandomBookingBody();
    const response = await request.post(`${BASE_URL}/booking`, { data: bookingData });
    expect(response.status()).toBe(200);

    const body = await response.json();

    bookingId = body.bookingid;

    // Assertions
    expect(body.booking).toHaveProperty('firstname', bookingData.firstname);
    expect(body.booking).toHaveProperty('lastname', bookingData.lastname);
    expect(body.booking.bookingdates).toEqual(bookingData.bookingdates);
  });

  test('GET - Get Specific Booking', async ({ request }) => {
    // Uses the ID generated in the previous test
    const response = await request.get(`${BASE_URL}/booking/${bookingId}`);
    
    expect(response.ok()).toBeTruthy();
    const body: Booking = await response.json();

    expect(body).toBeDefined();
    expect(body.firstname).not.toBeNull();
    expect(body.totalprice).toEqual(expect.any(Number)); // Strict type check
  });

  test('PUT - Update Booking (Requires Auth)', async ({ request }) => {
    const updateData = createRandomBookingBody();
    updateData.firstname = 'UpdatedName'; // specific change to verify

    const response = await request.put(`${BASE_URL}/booking/${bookingId}`, {
      headers: sharedHeaders, // Uses the token generated in beforeAll
      data: updateData,
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.firstname).toBe('UpdatedName');
    expect(body.totalprice).toBe(updateData.totalprice);
  });

  test('PATCH - Partial Update (Requires Auth)', async ({ request }) => {
    const partialData = {
      firstname: 'PatchedName',
      lastname: 'PatchedLast',
    };

    const response = await request.patch(`${BASE_URL}/booking/${bookingId}`, {
      headers: sharedHeaders,
      data: partialData,
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    
    expect(body.firstname).toBe('PatchedName');
    expect(body.lastname).toBe('PatchedLast');
    // Ensure other fields didn't change (optional but good practice)
    expect(body.depositpaid).toBe(true); 
  });

  test('GET - Filter Bookings (Collection Check)', async ({ request }) => {
  
    const response = await request.get(`${BASE_URL}/booking`, {
      params: {
        firstname: 'PatchedName',
        lastname: 'PatchedLast'
      }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    
    // Assert strictly on Array type
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('bookingid');
  });

  // --- NEGATIVE TESTS ---

  test('DELETE - Negative: Fail to delete without Token', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/booking/${bookingId}`); 
    
    // Restful Booker returns 403 Forbidden when auth is missing
    expect(response.status()).toBe(403);
  });

  test('GET - Negative: Handle Non-Existent ID', async ({ request }) => {
    const largeId = 99999999;
    const response = await request.get(`${BASE_URL}/booking/${largeId}`);
    
    expect(response.status()).toBe(404);
  });

  test('POST - Negative: Handle Invalid Payload (Bad Request)', async ({ request }) => {
    // Sending strings where numbers are expected, or missing required fields
    const badData = {
        firstname: 12345, // Invalid type
        // lastname is missing
        bookingdates: "NotAnObject" 
    };

    const response = await request.post(`${BASE_URL}/booking`, {
        data: badData
    });

    // Note: Some APIs return 400, Restful Booker usually returns 500 for bad payloads
    // We check that it is NOT 200/201
    expect(response.ok()).toBeFalsy();
  });

  // CLEANUP
  test.afterAll(async ({ request }) => {
    if (bookingId) {
      const response = await request.delete(`${BASE_URL}/booking/${bookingId}`, {
        headers: sharedHeaders
      });
      // It might have failed in a previous test, so we accept 201 (Created/Deleted) or 200, or 404 if already gone
      expect([200, 201, 404]).toContain(response.status());
      console.log(`Cleaned up booking ID: ${bookingId}`);
    }
  });
});