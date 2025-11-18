const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Servidor Node.js rodando no Railway!");
});

app.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});
