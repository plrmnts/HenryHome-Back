import { Router } from "express";
import * as PostCtrl from '../controllers/post.controller'
import { auth } from "../middleware";

const router:Router = Router()

router.get("/", PostCtrl.getPosts)
router.get("/:id", PostCtrl.getPostById)
router.post("/", PostCtrl.createPost)
router.delete("/", PostCtrl.deletePost)
router.patch("/", PostCtrl.updatePost)

export default router