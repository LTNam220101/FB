import { UPDATE_PROFILE_FAILED, UPDATE_PROFILE_SUCCESS } from './reducers';
import { UPDATE_PROFILE } from './../../redux-saga/actions';

export const authLogin = (payload: any, componentId?: string) => ({
  type: UPDATE_PROFILE,
  response: {
    success: {
      type: UPDATE_PROFILE_SUCCESS,
    },
    failure: {
      type: UPDATE_PROFILE_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import { GET_USER_POSTS_FAILED, GET_USER_POSTS_SUCCESS } from './reducers';
import { GET_USER_POSTS } from './../../redux-saga/actions';

export const getUserPosts = (payload: any, componentId?: string) => ({
  type: GET_USER_POSTS,
  response: {
    success: {
      type: GET_USER_POSTS_SUCCESS,
    },
    failure: {
      type: GET_USER_POSTS_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});