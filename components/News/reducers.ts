import {createReducer} from '../../utils/redux';

export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS';
export const GET_ALL_POSTS_FAILED = 'GET_ALL_POSTS_FAILED';
export const GET_ALL_POSTS_CLEAR = 'GET_ALL_POSTS_CLEAR';

export const GetAllPostsResult = createReducer(
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILED,
  GET_ALL_POSTS_CLEAR,
);

export const DELETE_ALL_POSTS_SUCCESS = 'DELETE_ALL_POSTS_SUCCESS';
export const DELETE_ALL_POSTS_FAILED = 'DELETE_ALL_POSTS_FAILED';
export const DELETE_ALL_POSTS_CLEAR = 'DELETE_ALL_POSTS_CLEAR';

export const DeleteAllPostsResult = createReducer(
  DELETE_ALL_POSTS_SUCCESS,
  DELETE_ALL_POSTS_FAILED,
  DELETE_ALL_POSTS_CLEAR,
);

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILED = 'DELETE_POST_FAILED';
export const DELETE_POST_CLEAR = 'DELETE_POST_CLEAR';

export const DeletePostResult = createReducer(
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILED,
  DELETE_POST_CLEAR,
);

export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILED = 'LIKE_POST_FAILED';
export const LIKE_POST_CLEAR = 'LIKE_POST_CLEAR';

export const LikePostResult = createReducer(
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILED,
  LIKE_POST_CLEAR,
);

export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILED = 'GET_POST_FAILED';
export const GET_POST_CLEAR = 'GET_POST_CLEAR';

export const GetPostResult = createReducer(
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  GET_POST_CLEAR,
);
