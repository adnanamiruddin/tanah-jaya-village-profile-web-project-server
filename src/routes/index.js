import express from "express";
import usersRoute from "../routes/users.route.js";
import greetingsRoute from "../routes/greetings.route.js";
import vissionAndMissionsRoute from "../routes/vissionAndMissions.route.js";
import blogsRoute from "../routes/blogs.route.js";
import infographicsRoute from "../routes/infographics.route.js";
import umkmsRoute from "../routes/umkms.route.js";
import schedulesRoute from "../routes/schedules.route.js";

const router = express.Router();

router.use("/users", usersRoute);
router.use("/greetings", greetingsRoute);
router.use("/vissionAndMissions", vissionAndMissionsRoute);
router.use("/blogs", blogsRoute);
router.use("/infographics", infographicsRoute);
router.use("/umkms", umkmsRoute);
router.use("/schedules", schedulesRoute);

export default router;
