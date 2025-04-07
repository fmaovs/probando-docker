import { Router } from "express";
import { deleteProduct, getAllProducts, getCategoria, getProduct, setProduct, updateProduct } from "../models/productos.model.js";

const router = Router();

// generamos los end point 
router.get("/api/producto/", getAllProducts);
router.get("/api/producto/:id", getProduct);
router.post("/api/producto/", setProduct);
router.put("/api/producto/:id", updateProduct);
router.delete("/api/producto/:id", deleteProduct);
router.get("/api/categoria/", getCategoria);





export default router;