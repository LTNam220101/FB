import {AUTH_LOGIN_FAILED, AUTH_LOGIN_SUCCESS} from './reducers';
import {AUTH_LOGIN} from './../../redux-saga/actions';

import {AUTH_LOGOUT_FAILED, AUTH_LOGOUT_SUCCESS} from './reducers';
import {AUTH_LOGOUT} from './../../redux-saga/actions';

export const authLogin = (payload: any, componentId?: string) => ({
  type: AUTH_LOGIN,
  response: {
    success: {
      type: AUTH_LOGIN_SUCCESS,
    },
    failure: {
      type: AUTH_LOGIN_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

export const authLogout = (payload: any, componentId?: string) => ({
  type: AUTH_LOGOUT,
  response: {
    success: {
      type: AUTH_LOGOUT_SUCCESS,
    },
    failure: {
      type: AUTH_LOGOUT_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});
