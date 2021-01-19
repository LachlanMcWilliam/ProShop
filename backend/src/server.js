import express from "express";

import { getProductRouter } from "./routes/get-product.js";
import { getAllProductsRouter } from "./routes/get-all-products.js";

let PORT = 0;

if (process.env.SERVICE_PORT) {
  PORT = process.env.SERVICE_PORT;
} else {
  throw new Error("Please define the 'SERVICE_PORT' environment variable");
}

const app = express();

app.use(getProductRouter);
app.use(getAllProductsRouter);

app.listen(PORT, () => {
  console.log(`Products server running on port: ${PORT}`);
});
