import * as model from "../models/products.model.js";

export const getAllProducts = () => {
  return products;
};

export const getProductById = (id) => {
  return products.find((item) => item.id == id);
};
