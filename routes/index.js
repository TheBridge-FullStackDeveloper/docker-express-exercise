const plates = require('./plates')
const orders = require('./orders')

function routerApi(app) {
  app.use('/plates', plates);
  app.use('/orders', orders)
}

module.exports = routerApi;