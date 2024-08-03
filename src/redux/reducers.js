import { createReducer } from '@reduxjs/toolkit';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from './actions';

const initialState = {
  loading: false,
  posts: [],
  error: '',
};

const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPostsRequest, (state) => {
      state.loading = true;
    })
    .addCase(fetchPostsSuccess, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = '';
    })
    .addCase(fetchPostsFailure, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });
});

export default postsReducer;
