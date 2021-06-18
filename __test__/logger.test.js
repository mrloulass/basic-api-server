'use strict';

const logger = require ('../src/middleware/logger.js');

xdescribe('testing middleware logger function', () =>{
test('logger logs method and headers, calls next', ()=>{
  let requestObject = {
    headers: 'test',
    method: 'test',
  }
  let responseObject = {};
  let nextFunction = jest.fn();
  console.log = jest.fn();

  logger(requestObject, responseObject);
  expect(nextFunction).toHaveBeenCalled();
  expect(console.log).toHaveBeenCalledWith('test','test');

});
});
