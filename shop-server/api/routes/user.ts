import { signin, signup } from "../controllers/user";
import express from "express";

const router = express.Router();

router.post("/", signup);
router.post("/login", signin);

export default router;
