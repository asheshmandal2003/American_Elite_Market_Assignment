import passport from "passport";
import { deleteAc, logout, signin, signup } from "../controllers/auth.js";
import express from "express";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", passport.authenticate("local"), signin);
router.post("/logout", verifyToken, logout);
router.delete("/delete/:id", verifyToken, deleteAc);

export default router;
