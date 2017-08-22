'use strict';

const Router = require('../router');
const should = require('should');

describe('Adding routes', () => {

  it('Routes is Array', () => {
    const router = Router();
    router.routes.should.be.an.Array();
  });

  it('Adding GET /', () => {
    const router = Router()
      .get('/', function () {});

    router.routes.should.be.an.Array().and.not.empty();
  });

  it('Check GET handler in routes after adding', () => {
    const router = Router()
      .get('/', function () {});

    router.routes[0].should.eql({
      method: 'GET', url: '/', handler: function () {}
    });
  });

  it('Check HEAD handler in routes after adding', () => {
    const router = Router()
      .head('/', function () {});

    router.routes[0].should.eql({
      method: 'HEAD', url: '/', handler: function () {}
    });
  });

  it('Check POST handler in routes after adding', () => {
    const router = Router()
      .post('/', function () {});

    router.routes[0].should.eql({
      method: 'POST', url: '/', handler: function () {}
    });
  });

  it('Check PUT handler in routes after adding', () => {
    const router = Router()
      .put('/', function () {});

    router.routes[0].should.eql({
      method: 'PUT', url: '/', handler: function () {}
    });
  });

  it('Check DELETE handler in routes after adding', () => {
    const router = Router()
      .delete('/', function () {});

    router.routes[0].should.eql({
      method: 'DELETE', url: '/', handler: function () {}
    });
  });

  it('Check CONNECT handler in routes after adding', () => {
    const router = Router()
      .connect('/', function () {});

    router.routes[0].should.eql({
      method: 'CONNECT', url: '/', handler: function () {}
    });
  });

  it('Check OPTIONS handler in routes after adding', () => {
    const router = Router()
      .options('/', function () {});

    router.routes[0].should.eql({
      method: 'OPTIONS', url: '/', handler: function () {}
    });
  });

  it('Check TRACE handler in routes after adding', () => {
    const router = Router()
      .trace('/', function () {});

    router.routes[0].should.eql({
      method: 'TRACE', url: '/', handler: function () {}
    });
  });

  it('Check PATCH handler in routes after adding', () => {
    const router = Router()
      .patch('/', function () {});

    router.routes[0].should.eql({
      method: 'PATCH', url: '/', handler: function () {}
    });
  });

});