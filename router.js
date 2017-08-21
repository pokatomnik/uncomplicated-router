'use strict';
const url = require('url');
module.exports = () => ({
  routes: [],
  get(url, handler) {
    this.routes.push({
      method: 'GET',
      url, handler
    });
    return this;
  },
  post(url, handler) {
    this.routes.push({
      method: 'POST',
      url, handler
    });
    return this;
  },
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
          this.pathArray = this.pathname.split('/').slice(1);
          return this;
        }
        param(param) {
          return this[param];
        }
      }
      const findRoute = (routes, requestedUrl, requestedMethod) => {
        let currentUrl, pathPart, match, currentRoute;
        for (let j=this.routes.length-1; j>=0; j--) {
          currentRoute = routes[ j ];
          currentUrl = new Url(url.parse(currentRoute.url));
          match = true
          if (currentRoute.method !== requestedMethod) { match = false; continue; }
          for (let i=currentUrl.pathArray.length - 1; i>=0; i--) {
            if (currentUrl.pathArray[i].startsWith(':')) {
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
});
