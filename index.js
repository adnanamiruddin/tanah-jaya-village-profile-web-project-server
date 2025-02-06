import express from "express";
import cors from "cors";
import routes from "./src/routes/index.js";
import "dotenv/config.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
