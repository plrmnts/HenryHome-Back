const { Router } = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/post.controller.js");

const router = Router()

router.get("/", getPosts)
router.get("/:id", getPostById)
router.post("/", createPost)
router.delete("/", deletePost)
router.patch("/", updatePost)

module.exports = router