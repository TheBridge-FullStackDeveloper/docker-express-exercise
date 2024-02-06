const express = require('express');
const fs = require('fs');
const menu = require("../data/menu.json");

const router = express.Router();

// 1. Recibe todos los platos
router.get("/", (req, res) => {
  res.json(menu);
});


// 2. Crea uno o varios platos más
router.post("/", (req, res) => {
  const updatedMenu = { ...menu, ...req.body}

  fs.writeFile("./data/menu.json", JSON.stringify(updatedMenu,null,2), (err) => {
    if (err) {
      throw Error;
    } else {
      res.json(
        {
          message: "Plato añadido con exito",
          plato: req.body,
          updatedMenu: updatedMenu
        }
      );
    }
  });
});


// 3. Cambiar una propiedad de un plato
router.put("/:id", (req, res) => {
  const { id } = req.params;

  const updateMenu = menu.map(
    element => {
      if ( id === element.id) {
        return { ...element , ...req.body  }
      }
      return element;
    }
  )
  
  fs.writeFile("./data/menu.json", JSON.stringify(updateMenu, null, 2), (err) => {

    if (err) {
      res.status(500).json({
        message: "Error al actualizar el plato",
        error: err.message
      });
    }
    
    res.json({
      message: "actualizado",
      data: req.body,
    })

  });
  
});



// 4. elimina un plato 
router.delete('/plates/:id', (req, res) => {
    const { id } = req.params;

  const updateDelMenu = menu.filter(
    element => element.id !== id);

  fs.writeFile("./data/menu.json", JSON.stringify(updateDelMenu, null, 2), 
    (err) => {
      res.json(menu);
    })
  
})



module.exports = router;