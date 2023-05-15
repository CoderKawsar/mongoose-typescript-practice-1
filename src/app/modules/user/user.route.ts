import express from "express";
import {
  createUser,
  getAUserById,
  getAdminUsers,
  getUsers,
} from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/admins", getAdminUsers);
router.get("/:id", getAUserById);
router.post("/create-user", createUser);

export default router;
