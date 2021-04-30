import { Router } from "express";
import VariantController from "../controllers/variant";
import Authentication from "../middlewares/authenticate";
import parser from "../middlewares/uploads";

const router = Router();
const { verifyToken } = Authentication;
const {
  addVariant, getVariantById, getVariants, deleteVariant, updateVariant
} = VariantController;

router.get("/variant", verifyToken, getVariants);
router.get("/variant/:id", verifyToken, getVariantById);

router.post("/variant", verifyToken, parser.single("image"), addVariant);

router.patch("/variant/:id", verifyToken, updateVariant);
router.delete("/variant/:id", verifyToken, deleteVariant);

export default router;
