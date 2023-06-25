import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users";
import postsReducer from './reducers/posts';

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});

export default store;
