import { Router } from "express";
import { nanoid } from "nanoid/async";

import ShortUrl from "../models/ShortUrl.js";

const router = Router();

router.get("/urls", async (req, res) => {
  try {
    const shortUrls = await ShortUrl.find();
    res.status(200).json(shortUrls);
  } catch (error) {
    res.status(500).json(`something went wrong ${error}`);
  }
});

router.post("/urls/create", async (req, res) => {
  try {
    const id = await nanoid(6);
    const shortUrl = new ShortUrl({ ...req.body, shortUrl: id });
    const createdUrl = await shortUrl.save();
    res.status(201).json(createdUrl);
  } catch (error) {
    res.status(500).json(`something went wrong ${error}`);
  }
});

router.delete("/urls/:id/delete", async (req, res) => {
  try {
    const deletedShortUrl = await ShortUrl.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).json(deletedShortUrl);
  } catch (error) {
    res.status(500).json(`something went wrong ${error}`);
  }
});

export default router;
