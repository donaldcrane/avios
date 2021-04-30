import { Router } from "express";
import UserController from "../controllers/user";
import Authentication from "../middlewares/authenticate";
import parser from "../middlewares/uploads";

const router = Router();
const { verifyToken } = Authentication;
const {
  registerUser, loginUser, updateUserProfile, getUsers, updateUserPicture
} = UserController;

router.post("/users/signin", loginUser);
router.post("/users/signup", registerUser);

router.get("/users", verifyToken, getUsers);

router.patch("/user-profile", verifyToken, updateUserProfile);
router.patch("/user-profile/image", verifyToken, parser.single("image"), updateUserPicture);

export default router;
