'use strict';

// bring in the server to test routes
const server = require('../src/server.js');

const supertest = require('supertest');

// pass in server.app in to supertest
const request = supertest(server.app);


describe('testing the server', () =>{

  test('testing a 200 on GET `/car`' , async ()=>{

    const response = await request.get('/car');
  
    expect(response.status).toEqual(200);

  });
  
  test('testing a 200 on POST `/car`' , async ()=>{

    const response = await request.post('/car');

    expect(response.status).toEqual(200);

  });
  test('testing a 200 on PUT `/car`' , async ()=>{

    const response = await request.put('/car');

    expect(response.status).toEqual(200);

  });
  test('testing a 200 on DELETE `/car`' , async ()=>{

    const response = await request.delete('/car');

    expect(response.status).toEqual(200);

  });
});
