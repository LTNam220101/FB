import { createReducer } from "../../utils/redux";

export const GET_AVATAR_SUCCESS = 'GET_AVATAR_SUCCESS';
export const GET_AVATAR_FAILED = 'GET_AVATAR_FAILED';
export const GET_AVATAR_CLEAR = 'GET_AVATAR_CLEAR';

export const GetAvatarResult = createReducer(
  GET_AVATAR_SUCCESS,
  GET_AVATAR_FAILED,
  GET_AVATAR_CLEAR
);