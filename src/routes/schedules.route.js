import express from "express";
import * as schedulesController from "../controllers/schedules.controller.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const router = express.Router();

router.post("/", tokenMiddleware.auth, schedulesController.createSchedule);
router.get("/", schedulesController.getAllSchedules);
router.put("/:scheduleId", tokenMiddleware.auth, schedulesController.editSchedule);
router.delete("/:scheduleId", tokenMiddleware.auth, schedulesController.deleteSchedule);

export default router;
