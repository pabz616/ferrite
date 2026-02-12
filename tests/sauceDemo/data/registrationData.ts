
import { faker } from '@faker-js/faker';

export default{
    formUrl: 'https://way2automation.com/way2auto_jquery/registration.php#load_box',
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    country: 'India',
    dob_month: '1',
    dob_day: '1',
    dob_year: '2014',
    aboutSelf: faker.lorem.sentence(),
    phoneNumber: faker.phone.number(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
}