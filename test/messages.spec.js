var chai = require('chai');
var expect = chai.expect;
var supertest = require("supertest");
var api = supertest.agent('http://localhost:3000');

describe('Messages', function() {
  it('should return 200 response on /messages GET', function() {
    api.get('/messages')
      .set('Accept', 'application/json')
      .expect(200);
  });
});
