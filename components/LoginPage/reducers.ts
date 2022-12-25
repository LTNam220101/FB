import {createReducer} from '../../utils/redux';

export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED';
export const AUTH_LOGIN_CLEAR = 'AUTH_LOGIN_CLEAR';

export const LoginResult = createReducer(
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_LOGIN_CLEAR,
);

export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_FAILED = 'AUTH_LOGOUT_FAILED';
export const AUTH_LOGOUT_CLEAR = 'AUTH_LOGOUT_CLEAR';

export const LogoutResult = createReducer(
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILED,
  AUTH_LOGOUT_CLEAR,
);
