import express from "express";
import tokenMiddleware from "../middlewares/token.middleware.js";
import * as infographicsController from "../controllers/infographics.controller.js";

const router = express.Router();

router.get("/", infographicsController.getInfographic);
router.post("/", tokenMiddleware.auth, infographicsController.saveInfographic);

export default router;
