import express from "express";
import { getUsers, postUsers } from "../controllers/userController.js";

const router = express.Router();

router.post('/', postUsers);

router.get('/user', getUsers);

export default router;
