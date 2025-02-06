import express from "express";
import * as usersController from "../controllers/users.controller.js";

const router = express.Router();

// router.post("/sign-up", usersController.signUp);
router.post("/sign-in", usersController.signIn);

export default router;
