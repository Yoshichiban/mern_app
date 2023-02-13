import express from "express";
//import preemptively the controllers that we have not yet created
import {
    getUser,
    getUserFriends,
    addRemoveFriend
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* CRUD Routes */
/* READ
routes where we grab information, we're not saving anything to the database, we're not updating or changing anything on the database
*/
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;