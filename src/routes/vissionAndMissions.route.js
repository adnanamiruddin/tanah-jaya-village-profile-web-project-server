import express from "express";
import tokenMiddleware from "../middlewares/token.middleware.js";
import * as vissionAndMissionsController from "../controllers/vissionAndMissions.controller.js";

const router = express.Router();

router.get("/", vissionAndMissionsController.getVissionAndMission);
router.post("/", tokenMiddleware.auth, vissionAndMissionsController.saveVissionAndMission);

export default router;
