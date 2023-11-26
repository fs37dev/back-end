const express = require("express");
const {
  getArticleList,
  getArticleDetail,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../../controllers/dashboard-api-controllers/article.controller");
const { tryCatch } = require("../../utils/try-catch");
const { authorization } = require("../../middleware/auth-doctor-middleware");
const { validationCreateArticle, runValidation, validationUpdateArticle } = require("../../validation");
const router = express.Router();

router.get("/", authorization, tryCatch(getArticleList));
router.get("/:id", authorization, tryCatch(getArticleDetail));
router.post("/", authorization, validationCreateArticle, runValidation, tryCatch(createArticle));
router.put("/:id", authorization, validationUpdateArticle, runValidation, tryCatch(updateArticle));
router.delete("/:id", authorization, tryCatch(deleteArticle));

module.exports = router;
