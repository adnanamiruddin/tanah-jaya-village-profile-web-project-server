import express from "express";
import usersRoute from "../routes/users.route.js";
import greetingsRoute from "../routes/greetings.route.js";
import vissionAndMissionsRoute from "../routes/vissionAndMissions.route.js";
import blogsRoute from "../routes/blogs.route.js";
import infographicsRoutee from "../routes/infographics.route.js";

const router = express.Router();

router.use("/users", usersRoute);
router.use("/greetings", greetingsRoute);
router.use("/vissionAndMissions", vissionAndMissionsRoute);
router.use("/blogs", blogsRoute);
router.use("/infographics", infographicsRoutee);

export default router;
