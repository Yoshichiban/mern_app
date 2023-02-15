import { createSlice } from "@reduxjs/toolkit";

//state stored in our global state; this data will be accessible throughout our entire application; no need to pass state and properties down to different components
const initialState = {
    mode:  "light",
    
    //auth informations
    user: "",
    token: "",

    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    //actions, essential functions that modifies the global state
    reducers: {
        setMode: (state) => {
            //toolkit has this built-in libray called imer; it seems like you're modifying state.mode but under-the-hood, it is making a new state
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        //action is param/arguments for the function
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state, action) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
                console.error("user friends non-existent :(");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post_id) return action.payload.post;
                return post;
            })
            state.posts = updatedPosts;
        }
    }
})

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost} = authSlice.actions;
export default authSlice.reducer;