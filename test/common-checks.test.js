'use strict';

const Router = require('../router');
const should = require('should');

describe('Common checks', () => {

  it('Test Router is a function', () => {
    Router.should.be.a.Function();
  });

  describe('Test Router fields and functions', () => {
    const router = Router();

    describe('Check http methods availability', () => {
      // ['get', 'head', 'post', 'put', 'delete', 'connect', 'options', 'trace', 'patch']
      it('GET', () => {
        router.get.should.be.a.Function();
      });

      it('HEAD', () => {
        router.head.should.be.a.Function();
      });

      it('POST', () => {
        router.post.should.be.a.Function();
      });

      it('PUT', () => {
        router.put.should.be.a.Function();
      });

      it('DELETE', () => {
        router.delete.should.be.a.Function();
      });

      it('CONNECT', () => {
        router.connect.should.be.a.Function();
      });

      it('OPTIONS', () => {
        router.options.should.be.a.Function();
      });

      it('TRACE', () => {
        router.trace.should.be.a.Function();
      });

      it('PATCH', () => {
        router.patch.should.be.a.Function();
      });

    });

    describe('Test 404 handler', () => {
      it('.default', () => {
        router.default.should.be.a.Function();
      });
    });

    describe('Test getRouter function', () => {
      it('.getRouter', () => {
        router.getRouter.should.be.a.Function();
      });
    });

  });
});