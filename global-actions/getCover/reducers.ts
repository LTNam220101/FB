import { createReducer } from "../../utils/redux";

export const GET_COVER_SUCCESS = 'GET_COVER_SUCCESS';
export const GET_COVER_FAILED = 'GET_COVER_FAILED';
export const GET_COVER_CLEAR = 'GET_COVER_CLEAR';

export const GetCoverResult = createReducer(
  GET_COVER_SUCCESS,
  GET_COVER_FAILED,
  GET_COVER_CLEAR
);