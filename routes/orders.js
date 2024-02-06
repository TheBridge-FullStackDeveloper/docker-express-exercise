const express = require('express');
const fs = require('fs');


const router = express.Router();

const ordenes = require('../data/orders.json')


// Dentro de `routes/orders.js` necesitarás crear un CR para gestionar las órdenes.
// 1. La primera ruta debería ser un GET para recuperar todas las órdenes de `./data/orders.json`
router.get('/', (req, res) => {
  res.json(ordenes)
})


// 2. La segunda ruta debería ser un POST para insertar una orden en ./data/menu.json y devolver un JSON como este { message: "Order Created", data: AQUÍ DEBERÍAN IR LOS DATOS GUARDADOS }
router.post('/create', (req, res) => {
  const updatedOrders = { ...ordenes, ...req.body }
  
  fs.writeFile("./data/orders.json", JSON.stringify(updatedOrders, null, 2), (err) => {
    if (err) {
      throw Error;
    } else {
      res.json(
        {
          message: "Order Created",
          order: req.body,
          updatedOrders: updatedOrders
        }
      );
    }
  })
})









module.exports = router;