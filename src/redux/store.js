import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users";
import postsReducer from './reducers/posts';
import albumsReducer from './reducers/albums';

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    albums: albumsReducer,
  },
});

export default store;
