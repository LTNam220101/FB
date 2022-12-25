import { GET_ALL_POSTS_FAILED, GET_ALL_POSTS_SUCCESS } from './reducers';
import { GET_ALL_POSTS } from './../../redux-saga/actions';

export const getAllPosts = (payload: any, componentId?: string) => ({
  type: GET_ALL_POSTS,
  response: {
    success: {
      type: GET_ALL_POSTS_SUCCESS,
    },
    failure: {
      type: GET_ALL_POSTS_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import { DELETE_ALL_POSTS_FAILED, DELETE_ALL_POSTS_SUCCESS } from './reducers';
import { DELETE_ALL_POSTS } from './../../redux-saga/actions';

export const deleteAllPosts = (payload: any, componentId?: string) => ({
  type: DELETE_ALL_POSTS,
  response: {
    success: {
      type: DELETE_ALL_POSTS_SUCCESS,
    },
    failure: {
      type: DELETE_ALL_POSTS_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import { DELETE_POST_FAILED, DELETE_POST_SUCCESS } from './reducers';
import { DELETE_POST } from './../../redux-saga/actions';

export const deletePost = (payload: any, componentId?: string) => ({
  type: DELETE_POST,
  response: {
    success: {
      type: DELETE_POST_SUCCESS,
    },
    failure: {
      type: DELETE_POST_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import { LIKE_POST_FAILED, LIKE_POST_SUCCESS } from './reducers';
import { LIKE_POST } from './../../redux-saga/actions';

export const likePost = (payload: any, componentId?: string) => ({
  type: LIKE_POST,
  response: {
    success: {
      type: LIKE_POST_SUCCESS,
    },
    failure: {
      type: LIKE_POST_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});