import { AUTH_REGISTER_FAILED, AUTH_REGISTER_SUCCESS } from './reducers';
import { AUTH_REGISTER } from './../../redux-saga/actions';

export const authRegister = (payload: any, componentId?: string) => ({
  type: AUTH_REGISTER,
  response: {
    success: {
      type: AUTH_REGISTER_SUCCESS,
    },
    failure: {
      type: AUTH_REGISTER_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});