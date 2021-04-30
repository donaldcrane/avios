import { Router } from "express";
import ProductController from "../controllers/product";
import Authentication from "../middlewares/authenticate";

const router = Router();
const { verifyToken } = Authentication;
const {
  addProduct, getProductById, getProducts, deleteProduct, updateProduct
} = ProductController;

router.get("/products", verifyToken, getProducts);
router.get("/product/:id", verifyToken, getProductById);

router.post("/product", verifyToken, addProduct);

router.patch("/product/:id", verifyToken, updateProduct);
router.delete("/product/:id", verifyToken, deleteProduct);

export default router;
