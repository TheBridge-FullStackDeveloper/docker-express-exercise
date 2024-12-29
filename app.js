const express = require("express")
const PORT = 3000
const app = express()

app.get("/", (req, res) => {
  res.send("Hello from Docker")
})

app.listen(PORT, () => {
  console.log("Servidor escuchando en puerto 3000")
})