import {CREATE_POST_FAILED, CREATE_POST_SUCCESS} from './reducers';
import {CREATE_POST} from './../../redux-saga/actions';

export const createPost = (payload: any, componentId?: string) => ({
  type: CREATE_POST,
  response: {
    success: {
      type: CREATE_POST_SUCCESS,
    },
    failure: {
      type: CREATE_POST_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});
