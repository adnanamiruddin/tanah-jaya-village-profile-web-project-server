import express from "express";
import * as blogsController from "../controllers/blogs.controller.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const router = express.Router();

router.post("/", tokenMiddleware.auth, blogsController.createBlog);
router.get("/", blogsController.getAllBlogs);
router.get("/:slug", blogsController.getBlogBySlug);
router.put("/:blogId", tokenMiddleware.auth, blogsController.editBlog);
router.delete("/:blogId", tokenMiddleware.auth, blogsController.deleteBlog);

export default router;
