const express = require('express');
const os = require('os');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  const hostname = os.hostname();
  res.send(`hi from a docker container 🙋‍♂️🐳 running on ${hostname}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});