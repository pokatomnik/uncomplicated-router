'use strict';

const url = require('url');

module.exports = () => (() => {
  const routerInstance = {
    routes: [],

    default(handler) {
      this.notFound = handler;
      return this;
    },

    getRouter() {
      return (req, res) => {
        class Url extends Object {
          constructor(parsedUrl) {
            super();
            Object.assign(this, parsedUrl);
            let pathArray = [];
            let splittedArray = this.pathname.split('/');
            for (let i=0, len=splittedArray.length; i<len; i++) {
              if (splittedArray[ i ]) { pathArray.push(splittedArray[ i ]); }
            }
            this.pathArray = pathArray;
            return this;
          }
        }
        const findRoute = (routes, requestedUrl, requestedMethod) => {
          let currentUrl, match, currentRoute;

          for (let j=this.routes.length-1; j>=0; j--) {
            currentRoute = routes[ j ];
            currentUrl = new Url(url.parse(currentRoute.url));

            /* path array length mismatch */
            if (currentUrl.pathArray.length !== requestedUrl.pathArray.length) { continue; }

            match = true;
            /* methods mismatch */
            if (currentRoute.method !== requestedMethod) { match = false; continue; }
            for (let i=currentUrl.pathArray.length - 1; i>=0; i--) {

              /* custom parameter */
              if (currentUrl.pathArray[ i ].startsWith(':')) {

                /* custom parameter must be set, current iteration must be stopped */
                req.params[ currentUrl.pathArray[ i ].slice(1) ] = requestedUrl.pathArray[ i ];
                continue;
              }
              if (currentUrl.pathArray[ i ] !== requestedUrl.pathArray[ i ]) { match = false; }
            }
            if (match) {
              return currentRoute.handler;
            }
          }
          return void 0;
        };

        const requestedUrl = new Url(url.parse(req.url));
        req.params = {};

        const matchedHandler = findRoute(this.routes, requestedUrl, req.method);
        if (matchedHandler) {
          matchedHandler(req, res);
        } else {
          if (typeof this.notFound === 'function') {
            this.notFound(req, res);
          } else {
            res.writeHead(404); res.end();
          }
        }
      };
    }
  };

  /* Enable http methods according https://developer.mozilla.org/ru/docs/Web/HTTP/Methods */
  ['get', 'head', 'post', 'put', 'delete', 'connect', 'options', 'trace', 'patch']
    .forEach(
      (method) => {
        routerInstance[ method ] = function (url, handler) {
          this.routes.push({ method: method.toUpperCase(), url, handler });
          return this;
        }
      }
    );

  return routerInstance;
})();
