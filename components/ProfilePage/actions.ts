import {UPDATE_PROFILE_FAILED, UPDATE_PROFILE_SUCCESS} from './reducers';
import {UPDATE_PROFILE} from './../../redux-saga/actions';

export const updateProfile = (payload: any, componentId?: string) => ({
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

import {UPDATE_AVATAR_FAILED, UPDATE_AVATAR_SUCCESS} from './reducers';
import {UPDATE_AVATAR} from './../../redux-saga/actions';

export const updateAvatar = (payload: any, componentId?: string) => ({
  type: UPDATE_AVATAR,
  response: {
    success: {
      type: UPDATE_AVATAR_SUCCESS,
    },
    failure: {
      type: UPDATE_AVATAR_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import {UPDATE_COVER_FAILED, UPDATE_COVER_SUCCESS} from './reducers';
import {UPDATE_COVER} from './../../redux-saga/actions';

export const updateCover = (payload: any, componentId?: string) => ({
  type: UPDATE_COVER,
  response: {
    success: {
      type: UPDATE_COVER_SUCCESS,
    },
    failure: {
      type: UPDATE_COVER_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import {GET_USER_POSTS_FAILED, GET_USER_POSTS_SUCCESS} from './reducers';
import {GET_USER_POSTS} from './../../redux-saga/actions';

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

import {CANCEL_REQUEST_FAILED, CANCEL_REQUEST_SUCCESS} from './reducers';
import {CANCEL_REQUEST} from './../../redux-saga/actions';

export const cancelRequest = (payload: any, componentId?: string) => ({
  type: CANCEL_REQUEST,
  response: {
    success: {
      type: CANCEL_REQUEST_SUCCESS,
    },
    failure: {
      type: CANCEL_REQUEST_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import {CHECK_FRIEND_FAILED, CHECK_FRIEND_SUCCESS} from './reducers';
import {CHECK_FRIEND} from './../../redux-saga/actions';

export const checkFriend = (payload: any, componentId?: string) => ({
  type: CHECK_FRIEND,
  response: {
    success: {
      type: CHECK_FRIEND_SUCCESS,
    },
    failure: {
      type: CHECK_FRIEND_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import {GET_LIST_FRIENDS_FAILED, GET_LIST_FRIENDS_SUCCESS} from './reducers';
import {GET_LIST_FRIENDS} from './../../redux-saga/actions';

export const getListFriends = (payload: any, componentId?: string) => ({
  type: GET_LIST_FRIENDS,
  response: {
    success: {
      type: GET_LIST_FRIENDS_SUCCESS,
    },
    failure: {
      type: GET_LIST_FRIENDS_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import {GET_REQUESTS_FAILED, GET_REQUESTS_SUCCESS} from './reducers';
import {GET_REQUESTS} from './../../redux-saga/actions';

export const getRequests = (payload: any, componentId?: string) => ({
  type: GET_REQUESTS,
  response: {
    success: {
      type: GET_REQUESTS_SUCCESS,
    },
    failure: {
      type: GET_REQUESTS_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import {REMOVE_FRIEND_FAILED, REMOVE_FRIEND_SUCCESS} from './reducers';
import {REMOVE_FRIEND} from './../../redux-saga/actions';

export const removeFriend = (payload: any, componentId?: string) => ({
  type: REMOVE_FRIEND,
  response: {
    success: {
      type: REMOVE_FRIEND_SUCCESS,
    },
    failure: {
      type: REMOVE_FRIEND_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import {SEND_REQUEST_FAILED, SEND_REQUEST_SUCCESS} from './reducers';
import {SEND_REQUEST} from './../../redux-saga/actions';

export const sendRequest = (payload: any, componentId?: string) => ({
  type: SEND_REQUEST,
  response: {
    success: {
      type: SEND_REQUEST_SUCCESS,
    },
    failure: {
      type: SEND_REQUEST_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import {SET_ACCEPT_FAILED, SET_ACCEPT_SUCCESS} from './reducers';
import {SET_ACCEPT} from './../../redux-saga/actions';

export const setAccept = (payload: any, componentId?: string) => ({
  type: SET_ACCEPT,
  response: {
    success: {
      type: SET_ACCEPT_SUCCESS,
    },
    failure: {
      type: SET_ACCEPT_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

import {CHECK_USER_FAILED, CHECK_USER_SUCCESS} from './reducers';
import {CHECK_USER} from './../../redux-saga/actions';

export const checkUser = (payload: any, componentId?: string) => ({
  type: CHECK_USER,
  response: {
    success: {
      type: CHECK_USER_SUCCESS,
    },
    failure: {
      type: CHECK_USER_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});
