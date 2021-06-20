'use strict';

// bring in the server to test routes
const server = require('../src/server.js');
//bring in data from model to test
const data = require('../src/models/index.js')
const supertest = require('supertest');

// pass in server.app in to supertest
const request = supertest(server.app);

// before all my test run do something (sync to data,dataBase)
// creates tables from models
beforeAll(async () => {
  await data.dataBase.sync();
});
// after my test are down do this (drop data,database)
// remove all created data and delete the table
afterAll(async () => {
  await data.dataBase.drop();
});

describe('testing the server', () => {

  test('testing a 200 on GET `/car`', async () => {
    const response = await request.get('/car');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  test('testing a 200 on POST `/car`', async () => {
    const response = await request.post('/car').send({
      name: 'Kia test',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Kia test');
  });

  test('testing a 200 on GET `/car/:carId`', async () => {
    const response = await request.get('/car/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Kia test');
  });

  test('testing a 200 on PUT `/car/:carId`', async () => {
    const response = await request.put('/car/1').send({
      name:'new car'
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('new car');
  });

  test('testing a 200 on DELETE `/car/:carId`', async () => {

    const response = await request.delete('/car/1');

    expect(response.status).toEqual(204);

  });
});

describe('testing the server', () => {

  test('testing a 200 on GET `/game`', async () => {
    const response = await request.get('/game');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  test('testing a 200 on POST `/game`', async () => {
    const response = await request.post('/game').send({
      name: 'Uno test',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Uno test');
  });

  test('testing a 200 on GET `/game/:gameId`', async () => {
    const response = await request.get('/game/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Uno test');
  });

  test('testing a 200 on PUT `/game/:gameId`', async () => {
    const response = await request.put('/game/1').send({
      name:'new game'
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('new game');
  });

  test('testing a 200 on DELETE `/game/:gameId`', async () => {

    const response = await request.delete('/game/1');

    expect(response.status).toEqual(204);

  });
});
