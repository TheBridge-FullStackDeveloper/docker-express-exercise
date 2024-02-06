const express = require("express");
const app = express();
const PORT = 3000;


const routerApi = require("./routes")


app.use(express.json());

// app.use('/rest', routerApi);

app.get("/", (req, res) => {
  res.send("CONECTADO");
});






routerApi(app);


app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT} 🚀`);
});
