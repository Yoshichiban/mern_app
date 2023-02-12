import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js";

/* CONFIGURATIONS (Backend Configurations and Middleware)

Middleware is basically something that runs between different requests; functions
*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); //this is only when you use "type":"modules"
dotenv.config();
const app = express(); //invoke express app so we can use our middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets'))); //set the directory of where we keep our assets; in our case it will be the images that we store; storing it locally, but in a real life production app we would want to store it in an actual storage file directory or cloud storage like Amazon S3; we're storing locally to simplify things for now

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
    /* 
    all configurations are just coming from package instructions and was taken from multer's github repo;
    this is how you can save your files;
    anytime someone uploads a file to your website then it's gonna say destination and saved into the folder(public/assets, in this case)
    */
});
const upload = multer({ storage }); //this will help us save files

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register); //an API: route, middleware, logic/endpoint/function/controller

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
}).catch((error) => console.log(`${error} did not connect`))