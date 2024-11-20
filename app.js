const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res)=>{
    res.send("Hello i am Pablo")
})

app.listen(port, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`)
})