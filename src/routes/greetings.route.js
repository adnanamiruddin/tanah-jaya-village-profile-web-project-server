import express from "express";
import tokenMiddleware from "../middlewares/token.middleware.js";
import * as greetingsController from "../controllers/greetings.controller.js";

const router = express.Router();

router.get("/", greetingsController.getGreeting);
router.post("/", tokenMiddleware.auth, greetingsController.saveGreeting);

export default router;
