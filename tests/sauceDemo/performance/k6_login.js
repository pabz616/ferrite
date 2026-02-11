import http from 'k6/http';
import encoding from 'k6/encoding';
import { check, sleep } from 'k6';


//TEST DATA .. CUSTOMIZE THIS SECTION TO FIT THE PROJECT
const apiURL = 'https://quickpizza.grafana.com/api/basic-auth'
const username = 'user'
const password = 'passwd'

//*** TEST ***
//ARRANGE (ENCODED CREDS)
export default function(){ 
  const credentials = `${username}:${password}`
  const encodedCredentials = encoding.b64encode(credentials)
  const options = {
    headers: {Authorization: `Basic ${encodedCredentials}`,},
    vus: 10000,
    stages:[
      {duration: '30s', target: 20},
      {duration: '1m30s', target: 10},
      {duration: '20s', target: 0},
    ], 
};

//ACT
const url = `${apiURL}/${username}/${password}`;
let res = http.get(url, options);

//ASSERT
check(res, {
  'status is 200': (r) => r.status === 200,
  'is authenticated' : (r)  => r.json().authenticated === true,
  'is correct user' : (r) => r.json().user === username,
  });
  sleep(1);
};
