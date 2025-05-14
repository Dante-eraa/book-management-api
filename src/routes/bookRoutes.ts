import express from "express";
import multer from "multer";
import * as controller from "../controllers/bookController";

const router = express.Router();
const upload = multer(); // Will store uploaded files in memory

router.get("/", controller.getAllBooks);
router.get("/:id", controller.getBook);
router.post("/", controller.createBook);
router.put("/:id", controller.updateBook);
router.delete("/:id", controller.deleteBook);
router.post("/import", upload.single("file"), controller.importBooks);

export default router;
