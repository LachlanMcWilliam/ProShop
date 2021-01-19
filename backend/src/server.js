const express = require("express");
const products = require("./data/products");
let PORT = 0;

if (process.env.SERVICE_PORT) {
  PORT = process.env.SERVICE_PORT;
} else {
  throw new Error("Please define the 'SERVICE_PORT' environment variable");
}

const app = express();

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Products server running on port: ${PORT}`);
});
