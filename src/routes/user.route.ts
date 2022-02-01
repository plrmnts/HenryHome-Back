import { Router} from "express";
import * as UserCrtl from '../controllers/user.controller'
const router = Router()


router.post("/login", UserCrtl.login)
router.post("/register", UserCrtl.register)

export default router