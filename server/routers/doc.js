import express from "express";
import {
  changeDocAccessType,
  createDoc,
  deleteDoc,
  getDocDetails,
  getDocs,
  removeAccess,
  shareDoc,
  updateDocName,
} from "../controllers/doc.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.route("/:id/document/create").post(verifyToken, createDoc);
router.route("/:id/document").get(verifyToken, getDocs);
router
  .route("/:id/document/:docId")
  .get(verifyToken, getDocDetails)
  .patch(verifyToken, updateDocName)
  .delete(verifyToken, deleteDoc);
router.route("/:id/document/:docId/share").post(shareDoc);
router.route("/:id/document/:docId/change-access").patch(changeDocAccessType);
router.route("/:id/document/:docId/people/:userId").delete(removeAccess);

export default router;
