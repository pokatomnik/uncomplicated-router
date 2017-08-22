'use strict';

const Router = require('../router');
const should = require('should');

describe('Test not found', () => {
  it('Test default not found', () => {
    const router = Router()
      .get('/test', () => {})
      .getRouter();

    const req = {
      method: 'GET',
      url: '/foo'
    };

    const res = {
      writeHead(value) {
        this.notFound = value;
      },
      end() {}
    };

    router(req, res);

    res.notFound.should.be.a.Number().and.eql(404);
  });

  it('Test custom Not Found handler', () => {
    const router = Router()
      .get('/test', () => {})
      .default((req, res) => { res.success = true; })
      .getRouter();

    const req = {
      method: 'GET',
      url: '/foo'
    };

    const res = {};

    router(req, res);

    res.success.should.eql(true);

  });
});