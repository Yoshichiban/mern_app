import jwt from 'jsonwebtoken';

//next parameter will allow us to have the function "continue"
export const verifyToken = async (req, res, next) => {
    try {
        //from the request from the frontend, we're grabbing the authorization header and that's where the token will be set, the frontend will set this and then we can grab this in the backend through this key
        let token = req.header("Authorization");

        if(!token) {
            return res.status(403).send("Access Denied");
        }

        if(token.startswith("Bearer ")){
            token = token.slice(7, token.length).trimLeft();
        }
        
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}