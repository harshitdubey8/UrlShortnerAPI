import mongoose from "mongoose";
import { nanoid } from "nanoid";

const shortUrlSchema = new mongoose.Schema({
  url: { type: String, required: true },
  shortUrl: { type: String, required: true, default: nanoid(6) },
});

export default mongoose.model("ShortUrl", shortUrlSchema);
