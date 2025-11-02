const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>hello world</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Giovani Ramos",
      email: "123@456.com",
    },
    {
      name: "Giovani Silva",
      email: "456@123.com",
    },
  ];

  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
