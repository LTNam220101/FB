import {createReducer} from '../../utils/redux';

export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILED = 'UPDATE_PROFILE_FAILED';
export const UPDATE_PROFILE_CLEAR = 'UPDATE_PROFILE_CLEAR';

export const UpdateProfileResult = createReducer(
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_CLEAR,
);

export const UPDATE_AVATAR_SUCCESS = 'UPDATE_AVATAR_SUCCESS';
export const UPDATE_AVATAR_FAILED = 'UPDATE_AVATAR_FAILED';
export const UPDATE_AVATAR_CLEAR = 'UPDATE_AVATAR_CLEAR';

export const UpdateAvatarResult = createReducer(
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAILED,
  UPDATE_AVATAR_CLEAR,
);

export const UPDATE_COVER_SUCCESS = 'UPDATE_COVER_SUCCESS';
export const UPDATE_COVER_FAILED = 'UPDATE_COVER_FAILED';
export const UPDATE_COVER_CLEAR = 'UPDATE_COVER_CLEAR';

export const UpdateCoverResult = createReducer(
  UPDATE_COVER_SUCCESS,
  UPDATE_COVER_FAILED,
  UPDATE_COVER_CLEAR,
);

export const GET_USER_POSTS_SUCCESS = 'GET_USER_POSTS_SUCCESS';
export const GET_USER_POSTS_FAILED = 'GET_USER_POSTS_FAILED';
export const GET_USER_POSTS_CLEAR = 'GET_USER_POSTS_CLEAR';

export const GetUserPostsResult = createReducer(
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_FAILED,
  GET_USER_POSTS_CLEAR,
);

export const CANCEL_REQUEST_SUCCESS = 'CANCEL_REQUEST_SUCCESS';
export const CANCEL_REQUEST_FAILED = 'CANCEL_REQUEST_FAILED';
export const CANCEL_REQUEST_CLEAR = 'CANCEL_REQUEST_CLEAR';

export const CancelRequestResult = createReducer(
  CANCEL_REQUEST_SUCCESS,
  CANCEL_REQUEST_FAILED,
  CANCEL_REQUEST_CLEAR,
);

export const CHECK_FRIEND_SUCCESS = 'CHECK_FRIEND_SUCCESS';
export const CHECK_FRIEND_FAILED = 'CHECK_FRIEND_FAILED';
export const CHECK_FRIEND_CLEAR = 'CHECK_FRIEND_CLEAR';

export const CheckFriendResult = createReducer(
  CHECK_FRIEND_SUCCESS,
  CHECK_FRIEND_FAILED,
  CHECK_FRIEND_CLEAR,
);

export const GET_LIST_FRIENDS_SUCCESS = 'GET_LIST_FRIENDS_SUCCESS';
export const GET_LIST_FRIENDS_FAILED = 'GET_LIST_FRIENDS_FAILED';
export const GET_LIST_FRIENDS_CLEAR = 'GET_LIST_FRIENDS_CLEAR';

export const GetListFriendsResult = createReducer(
  GET_LIST_FRIENDS_SUCCESS,
  GET_LIST_FRIENDS_FAILED,
  GET_LIST_FRIENDS_CLEAR,
);

export const GET_REQUESTS_SUCCESS = 'GET_REQUESTS_SUCCESS';
export const GET_REQUESTS_FAILED = 'GET_REQUESTS_FAILED';
export const GET_REQUESTS_CLEAR = 'GET_REQUESTS_CLEAR';

export const GetRequestsResult = createReducer(
  GET_REQUESTS_SUCCESS,
  GET_REQUESTS_FAILED,
  GET_REQUESTS_CLEAR,
);

export const REMOVE_FRIEND_SUCCESS = 'REMOVE_FRIEND_SUCCESS';
export const REMOVE_FRIEND_FAILED = 'REMOVE_FRIEND_FAILED';
export const REMOVE_FRIEND_CLEAR = 'REMOVE_FRIEND_CLEAR';

export const RemoveFriendResult = createReducer(
  REMOVE_FRIEND_SUCCESS,
  REMOVE_FRIEND_FAILED,
  REMOVE_FRIEND_CLEAR,
);

export const SEND_REQUEST_SUCCESS = 'SEND_REQUEST_SUCCESS';
export const SEND_REQUEST_FAILED = 'SEND_REQUEST_FAILED';
export const SEND_REQUEST_CLEAR = 'SEND_REQUEST_CLEAR';

export const SendRequestResult = createReducer(
  SEND_REQUEST_SUCCESS,
  SEND_REQUEST_FAILED,
  SEND_REQUEST_CLEAR,
);

export const SET_ACCEPT_SUCCESS = 'SET_ACCEPT_SUCCESS';
export const SET_ACCEPT_FAILED = 'SET_ACCEPT_FAILED';
export const SET_ACCEPT_CLEAR = 'SET_ACCEPT_CLEAR';

export const SetAcceptResult = createReducer(
  SET_ACCEPT_SUCCESS,
  SET_ACCEPT_FAILED,
  SET_ACCEPT_CLEAR,
);

export const CHECK_USER_SUCCESS = 'CHECK_USER_SUCCESS';
export const CHECK_USER_FAILED = 'CHECK_USER_FAILED';
export const CHECK_USER_CLEAR = 'CHECK_USER_CLEAR';

export const CheckUserResult = createReducer(
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILED,
  CHECK_USER_CLEAR,
);
