import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: String,
        description: String,
        userPicturePath: String,
        picturePath: String,
        likes: {
            //an object
            type: Map,
            //check if userId exists on this map; could have been an array of strings of userId's that liked the comment, but Map is more efficient/faster(performance concern, imagine going through thousands of strings to see if someone liked the post); O(n) vs O(1)
            of: Boolean,

        },
        comments{
            type: Array,
            default: []
        }
    }, 
    {timestamps: true}
);

const Post = mongoose.model("Post", postSchema);
export default Post;