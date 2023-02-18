# MERN Stack App Project #1

## Notes
    "type": "module" 
on *package.json* was added so we can use *import* statements instead of *require* statements

Using older libraries, as long as it's good enough, is usually preferable because of edge-cases in production environments and well established use-case.

ES6 Import:
export default = import anyName
export const namedExport = import {namedExport}

Ctrl+D - shortcut for selecting next matching word

### Backend
Before writing the APIs, look at the final build or mocks or whatever you have. You want to see how you're going to organize your data models. Data models are ways of organizing your data in nice, succinct categories... making sure they are separate from each other and we can make relations between each other. We're going to be using MongoDB which is a little more freeform compared to SQL type database where everything is about relations.

TLDR: Have a good *data* structure before coding.

Probably the hardest part of this project:
Authentication - Registration/Login
Authorization - Make sure someone's logged in before you perform certain actions

index.js(app.use/post/get) -> use routes if app.use()  
route -> import express and controller -> router from Express -> CRUD -> export  
controller -> import Models -> CRUD with try-catch  

### Frontend
**jsconfig.json**
when you import different files into other files, you can just start from *src*
```
import HomePage from 'scenes/homePage';
vs
import HomePage from './scenes/homePage';
```
.jsx have react components in them  

Redux File Folder
Redux Toolkit - global state; data will be accessible throughout the entire application

Hooks:
useState
useNavigate
useDispatch
useTheme

sx - The sx prop lets you add any valid CSS to an element, while using values from your theme to keep styles consistent.

## Data Models
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

## Order of Operations
**(git)** gh repo create  
npm init  
npm i \[dependencies\] -s  
create index.js and import dependencies  
**backend** configurations + middleware setup  
database setup  
data modeling and ERD diagrams  
authentication and authorization  
**routes** setup  

**frontend** installation and setup  
```
npm i react-redux @reduxjs/toolkit redux-persist react-dropzone dotenv formik yup react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material
```  
redux file folder architecture & react router setup based on **scenes**(how the UI looks)
```
Home Page
Profile Page
Login Page
Nav Bar

Post Widget
User Widget
Friend List Widget

Shared/Reusable Components
```
create routes in App.js
setup Redux Toolkit
color, theme, dark mode, styling

## Technologies Used

### MERN Stack
MongoDB, Express, React, Node

### Industry Standards
**Frontend**  
ReactJS  
React Router - navigation  
Redux - most popular enterprise-level state management tool
Redux Toolkit - a very easy way to use Redux; it's a wrapper around redux
Redux Persist - store state in local storage  
React dropzone - image uploads  
dotenv - environment variables
Formik + yup - form handling and form validation  

**Backend**  
NodeJS - runtime  
Express - backend framework  
Mongoose - managing MongoDB  
JSON Web Token(JWT) - Authentication  
Multer - File uploads  

### Dependencies
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