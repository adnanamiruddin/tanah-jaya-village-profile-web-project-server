import express from "express";
import * as umkmsController from "../controllers/umkms.controller.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const router = express.Router();

router.post("/", tokenMiddleware.auth, umkmsController.createUmkm);
router.get("/", umkmsController.getAllUmkms);
router.get("/:slug", umkmsController.getUmkmBySlug);
router.put("/:umkmId", tokenMiddleware.auth, umkmsController.editUmkm);
router.delete("/:umkmId", tokenMiddleware.auth, umkmsController.deleteUmkm);

export default router;
