import express from "express";
import { login } from "../controllers/auth.js";

//set up a route; allow express to identify that these routes will all be configured and it allows us to have these in separate files to keep us organized
const router = express.Router();

//instead of app.use
//this will be "/auth/login" not just "/login"
router.post("/login", login)