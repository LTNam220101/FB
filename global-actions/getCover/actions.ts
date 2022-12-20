import { GET_COVER_FAILED, GET_COVER_SUCCESS } from './reducers';
import { GET_COVER } from '../../redux-saga/actions';

export const getCover = (payload: any, componentId?: string) => ({
  type: GET_COVER,
  response: {
    success: {
      type: GET_COVER_SUCCESS,
    },
    failure: {
      type: GET_COVER_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});