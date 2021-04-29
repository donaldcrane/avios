import { Router } from "express";
import CommentController from "../controllers/comment";
import Authentication from "../middlewares/authenticate";

const router = Router();
const { verifyToken } = Authentication;
const {
  addComment, getCommentById, deleteComment,
} = CommentController;

router.get("/Comment/:id", getCommentById);

router.post("/Comment", addComment);

router.delete("/Comment/:id", verifyToken, deleteComment);

export default router;
