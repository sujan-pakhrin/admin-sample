import express from "express";
import { Login, Logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/auth',Login)
router.delete('/auth',Logout)

export default router;
