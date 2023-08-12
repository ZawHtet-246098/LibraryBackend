import express from "express";

import {
  getBooks,
  getBooksByPage,
  getExactBook,
  getAllBooksForSearchBarSuggestion,
  getSearchBook,
} from "../controller/books.js";
const router = express.Router();

router.get("/", getBooks);
router.get(
  "/getAllBooksForSearchBarSuggestion",
  getAllBooksForSearchBarSuggestion
);
router.get("/search", getSearchBook);
router.get("/exactbooks", getBooksByPage);
router.get("/:id", getExactBook);

export default router;
