'use strict';

const Router = require('../router');
const should = require('should');

describe('Testing router', () => {

  describe('Basic routes', () => {

    it('Test GET /', () => {
      const router = Router()
        .get('/', (req, res) => {
          req.foo = 'bar';
          res.bar = 'foo';
        })
        .getRouter();

      const req = { url: '/', method: 'GET' };
      const res = {};

      router(req, res);

      req.should.eql({ url: '/', method: 'GET', params: {}, foo: 'bar' });
      res.should.eql({ bar: 'foo' });
    });

    it('Test HEAD /', () => {
      const router = Router()
        .head('/', (req, res) => {
          req.foo = 'bar';
          res.bar = 'foo';
        })
        .getRouter();

      const req = { url: '/', method: 'HEAD' };
      const res = {};

      router(req, res);

      req.should.eql({ url: '/', method: 'HEAD', params: {}, foo: 'bar' });
      res.should.eql({ bar: 'foo' });
    });

    it('Test POST /', () => {
      const router = Router()
        .post('/', (req, res) => {
          req.foo = 'bar';
          res.bar = 'foo';
        })
        .getRouter();

      const req = { url: '/', method: 'POST' };
      const res = {};

      router(req, res);

      req.should.eql({ url: '/', method: 'POST', params: {}, foo: 'bar' });
      res.should.eql({ bar: 'foo' });
    });

    it('Test PUT /', () => {
      const router = Router()
        .put('/', (req, res) => {
          req.foo = 'bar';
          res.bar = 'foo';
        })
        .getRouter();

      const req = { url: '/', method: 'PUT' };
      const res = {};

      router(req, res);

      req.should.eql({ url: '/', method: 'PUT', params: {}, foo: 'bar' });
      res.should.eql({ bar: 'foo' });
    });

    it('Test DELETE /', () => {
      const router = Router()
        .delete('/', (req, res) => {
          req.foo = 'bar';
          res.bar = 'foo';
        })
        .getRouter();

      const req = { url: '/', method: 'DELETE' };
      const res = {};

      router(req, res);

      req.should.eql({ url: '/', method: 'DELETE', params: {}, foo: 'bar' });
      res.should.eql({ bar: 'foo' });
    });

    it('Test CONNECT /', () => {
      const router = Router()
        .connect('/', (req, res) => {
          req.foo = 'bar';
          res.bar = 'foo';
        })
        .getRouter();

      const req = { url: '/', method: 'CONNECT' };
      const res = {};

      router(req, res);

      req.should.eql({ url: '/', method: 'CONNECT', params: {}, foo: 'bar' });
      res.should.eql({ bar: 'foo' });
    });

    it('Test OPTIONS /', () => {
      const router = Router()
        .options('/', (req, res) => {
          req.foo = 'bar';
          res.bar = 'foo';
        })
        .getRouter();

      const req = { url: '/', method: 'OPTIONS' };
      const res = {};

      router(req, res);

      req.should.eql({ url: '/', method: 'OPTIONS', params: {}, foo: 'bar' });
      res.should.eql({ bar: 'foo' });
    });

    it('Test TRACE /', () => {
      const router = Router()
        .trace('/', (req, res) => {
          req.foo = 'bar';
          res.bar = 'foo';
        })
        .getRouter();

      const req = { url: '/', method: 'TRACE' };
      const res = {};

      router(req, res);

      req.should.eql({ url: '/', method: 'TRACE', params: {}, foo: 'bar' });
      res.should.eql({ bar: 'foo' });
    });

    it('Test PATCH /', () => {
      const router = Router()
        .patch('/', (req, res) => {
          req.foo = 'bar';
          res.bar = 'foo';
        })
        .getRouter();

      const req = { url: '/', method: 'PATCH' };
      const res = {};

      router(req, res);

      req.should.eql({ url: '/', method: 'PATCH', params: {}, foo: 'bar' });
      res.should.eql({ bar: 'foo' });
    });

  });

  describe('Test parametrized routes', () => {
    it('Test GET /:foo/:bar', () => {
      const router = Router()
        .get('/:foo/:bar', () => {})
        .getRouter();

      const req = { url: '/value1/value2', method: 'GET' };
      const res = {};

      router(req, res);

      req.should.eql({
        url: '/value1/value2', method: 'GET', params: {
          foo: 'value1',
          bar: 'value2'
        }
      });
      res.should.eql({});
    });
  });
});