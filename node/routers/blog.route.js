import express from "express";
import { createBlog, deleteBlog, getBlog, getBlogs, UBcount } from "../controllers/blog.controller.js";
import {verifyAdmin} from '../utils/verifyToken.js'
import upload from "../middleware/multerconfig.js";

const router = express.Router();

router.post("/blog", upload.single("blog_img"), createBlog);
router.get("/blog", getBlogs);
router.get("/blog/:id", getBlog);
router.delete("/blog/:id", deleteBlog);
router.get('/ub',UBcount)


export default router;
