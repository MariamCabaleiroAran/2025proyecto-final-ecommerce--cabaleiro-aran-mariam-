import { Router } from "express";

const router = Router();

const products = [
  { id: 1, name: "Camiseta Deportiva", price: 1500 },
  { id: 2, name: "Zapatos Running", price: 1200 },
  { id: 3, name: "Mochila Escolar", price: 3500 },
  { id: 4, name: "Auriculares Bluetooth", price: 8000 },
  { id: 5, name: "Botella Térmica", price: 22000 },
];

import {
  getAllProducts,
  searchProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

router.get("/products", getAllProducts);
router.get("/products/search", searchProduct);
router.get("/products/:id", getProductById);

router.post("/products", auth, createProduct);

router.patch("/products/:id", updateProduct);
router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

export default router;
