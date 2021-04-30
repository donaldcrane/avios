import { Router } from "express";
import userRoutes from "./userRoutes";
import productRoutes from "./productRoutes";
import variantRoutes from "./variantRoutes";

const router = new Router();

router.use("/", userRoutes);
router.use("/auth", productRoutes);
router.use("/auth", variantRoutes);

export default router;
