import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";
import User from "../models/User.js"

/* REGISTER USER */
export const register = async (req, res) => {
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body; //we have to send an object from the front end with these arguments

        /* ENCRYPT PASSWORD */
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        //when the user logs in, they will provide the password, and we're going to salt that password again. if correct, we're giving them a json web token
        const newUser =  new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,

            /* random value for now; implementation later */
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000)
        }
        )
    } catch (err) {

    }

}
//async because we're going to be calling mongo database, and we make a call to mongo database it's gonna be asynchronous; it's essentially an api call that you do from front end to backend, then backend to a database
/* 
request body that we get from front end
response is what we are going to be sending back to the front end 

express provides this functionality by default
*/