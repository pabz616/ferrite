import { faker } from '@faker-js/faker';
const {DateTime } = require ('luxon')

export default {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    price: faker.number.int({ min: 100, max: 1000 }), 
    checkin: DateTime.now().toFormat('yyyy-MM-dd'),
    checkout: DateTime.now().plus({ days: 5 }).toFormat('yyyy-MM-dd'),
    requests: faker.word.noun()
}
