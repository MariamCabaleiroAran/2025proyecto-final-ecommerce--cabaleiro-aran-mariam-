import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;

const jsonPath = path.join(__dirname, "./products.json");
const json = fs.readFileSync(jsonPath, "utf-8");
const products = JSON.parse(json);

// console.log(products);

import { db } from "./data.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  setDoc,
  query,
  where,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error(error);
  }
};

export async function searchProductByField (field, value) {
  try {
    const q = query(productsCollection, where(field, "==", value));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc)  => ({
      id: doc.id,
    ...doc.data(),
  }));
  } catch (error) {
    console.error(`Error al buscar productos por ${field}:`, error);
    throw error;
  }
};

export const createProduct = async (data) => {
  console.log('Datos recibidos en createProduct:', data);
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};

//PUT+PATCH
export const updateProduct = async (id, updateProductData) => {
  try {
    const docRef = doc(productsCollection, id);
    await setDoc(docRef, updateProductData, { merge: true }); 
    return { id, ...updateProductData };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(productRef);
    return true;
  } catch (error) {
    console.error(error);
  }
};