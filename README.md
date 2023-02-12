### MERN Stack App Project #1

## Notes
    "type": "module" 
on *package.json* was added so we can use *import* statements instead of *require* statements

Before writing the APIs, look at the final build or mocks or whatever you have. You want to see how you're going to organize your data models. Data models are ways of organizing your data in nice, succinct categories... making sure they are separate from each other and we can make relations between each other. We're going to be using MongoDB which is a little more freeform compared to SQL type database where everything is about relations.

TLDR: Have a good *data* structure before coding.

Probably the hardest part of this project:
Authentication - Registration/Login
Authorization - Make sure someone's logged in before you perform certain actions

# Data Models
    User
        Location
        Occupation
        Number of Views
        Impressions
        Social Profiles
    Posts
        User
        Description
        Friends(boolean)
        User PFP
        Image
        Number of likes
        Comments

*Use lucid.app*
Data Structure + Relationships

## Order
git
    gh repo create
npm init
npm i \[dependencies\] -s
create index.js and import dependencies
backend configurations + middleware setup
database setup
data modeling and ERD diagrams



## Technologies Used

MERN Stack
MongoDB< ExpressJS, ReactJS, NodeJS

Frontend
ReactJS
React Router - navigation
Formik + yup - form and form validation
Redux Toolkit - state management
Redux Persist - store in local storage
React dropzone - image uploads

Backend
NodeJS - runtime
Express - backend framework
Mongoose - managing MongoDB
JSON Web Token(JWT) - Authentication
Multer - File uploads

Industry Standards

npm i -g nodemon
npm i express body-parser bcrypt cors dotenv gridfs-stream multer multer-gridfs-storage helmet morgan jsonwebtoken mongoose

body-parser(to process request body)
bcrypt(password encryption)
cors(cross origin request)
dotenv(environment variable)
gridfs-stream multer multer-gridfs-storage(file upload)
helmet(request safety)
morgan(login)
jsonwebtoken(authentication)
mongoose(MongoDB access)