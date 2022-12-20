import { GET_AVATAR_FAILED, GET_AVATAR_SUCCESS } from './reducers';
import { GET_AVATAR } from '../../redux-saga/actions';

export const getAvatar = (payload: any, componentId?: string) => ({
  type: GET_AVATAR,
  response: {
    success: {
      type: GET_AVATAR_SUCCESS,
    },
    failure: {
      type: GET_AVATAR_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});