import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        /*
        send the user a status code of 201, meaning something have been craeted, a JSON version of the savedUser so that the front-end can receive this response; front-end engineers always make sure they're getting the correct response; back-end engineers make sure the data coming back from the backend is correct and in the proper structure that the front-end can view otherwise it creates more work
        */
    } catch (err) {
        //error message of whatever the mongodb database has returned
        res.status(500).json({ error: err.message })
    }

}
//async because we're going to be calling mongo database, and we make a call to mongo database it's gonna be asynchronous; it's essentially an api call that you do from front end to backend, then backend to a database
/* 
request body that we get from front end
response is what we are going to be sending back to the front end 

express provides this functionality by default
*/

/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        //we're using mongoose to try to find the one that has the specified email; then bring back all the user information over here
        const user = await User.findOne({ email: email });
        //if the user does not exist(like improper email), return res.status
        if (!user) return res.status(400).json({ msg: "User does not exist." });

        //this is gonna determine if we match the password; using the same salt
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        //so it doesn't get sent back to the frontend and kept safe
        delete user.password;
        res.status(200).json({ token, user });
        //typically when you work in a company, the company is going to be using a 3rd party authentication which would be way more secure than your own implementation

    } catch (err) {
        //you can customize error messages but for this simple app, we're not going to do that
        res.status(500).json({ error: err.message })
    }
}