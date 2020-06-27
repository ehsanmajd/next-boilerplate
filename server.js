// server.js
const next = require('next')
const routes = require('./routes')
const favicon = require('serve-favicon')
const { join } = require('path')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
const compression = require('compression')

// With express
const express = require('express')
app.prepare().then(() => {
  const server = express();
  if (process.env.NODE_ENV === 'production') {
    server.use(compression());
  }

  server.use(favicon(join(__dirname, 'public', 'favicon.ico')));
  server.use(handler).listen(process.env.PORT);
})

