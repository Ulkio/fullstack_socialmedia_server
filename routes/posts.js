import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                                    READ                                    */
/* -------------------------------------------------------------------------- */
router.get("/", verifyToken, getFeedPosts); //homepage, get all posts
router.get("/:userId", verifyToken, getUserPosts);
/* -------------------------------------------------------------------------- */
/*                                   UPDATE                                   */
/* -------------------------------------------------------------------------- */
router.patch("/:id/like", verifyToken, likePost);

export default router;
