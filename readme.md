### Here is example that explains everything:

```
const http = require('http');
const Router = require('./router');

const router = Router()
  .get('/', (req, res) => { res.end('main'); })
  .get('/home', (req, res) => { res.end('home'); })
  .get('/test/:id', (req, res) => { res.end(`Params is ${req.params.id}`) })
  .default((req, res) => { res.writeHead(404); res.end('404! Oops!'); })
  .getRouter();

http
  .createServer(router)
  .on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  })
  .listen(8000);
```