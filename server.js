import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import shortUrlRouter from "./routes/shortUrl.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

await connectDB();

app.get("/", (req, res) => res.status(200).send("hello world"));
app.use("/api", shortUrlRouter);

app.listen(port, () => console.log(`listening on localhost : ${port}`));
