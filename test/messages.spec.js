var chai = require('chai');
var expect = chai.expect;
var request = require("supertest");
var app = require("../app/app");

describe('Messages', function() {
  it('should return 200 response on /messages GET', function(done) {
    request(app).get('/messages')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should return 200 response on /messages POST', function(done) {
    var message = {
      "content": "This is a test message"
    }
    request(app).post('/messages')
      .set('Accept', 'application/json')
      .send(message)
      .expect(200, done);
  });

  it('should return 400 response on /messages POST given no content', function(done) {
    var message = {
      "nocontent": "message"
    }
    request(app).post('/messages')
      .set('Accept', 'application/json')
      .send(message)
      .expect(400, done);
  });

  it('shoudl return 200 response on /messages DELETE', function(done) {
    request(app).delete('/messages/1')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});
