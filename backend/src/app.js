import express from "express";

import { getProductRouter } from "./routes/get-product.js";
import { getAllProductsRouter } from "./routes/get-all-products.js";

const app = express();

app.use(getProductRouter);
app.use(getAllProductsRouter);

export { app };
