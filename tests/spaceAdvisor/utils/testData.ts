import { faker } from '@faker-js/faker';

export default {
    sa_URL: 'https://demo.testim.io/',
    sa_TITLE: 'Space & Beyond | Testim.io demo',
    sa_HEADER: 'Space & Beyond',
    sa_SUBHEADER: 'Customize your dream journey to space',
    sa_traveler_name: faker.person.fullName(),
    sa_traveler_email: `tester${faker.number}@galactictravels.com`,
    sa_traveler_ssn: '123-45-6789',
    sa_traveler_tel: '212-333-4455',
    sa_promo: faker.color+`${faker.number.int}`,
    EmailErrorCopy: 'Enter a valid e-mail address.',
    SSNErrorCopy: 'Enter a valid Social Security number (xxx-xx-xxxx).',
    TELErrorCopy: 'Enter a valid US phone number.'
}