import {CREATE_COMMENT_FAILED, CREATE_COMMENT_SUCCESS} from './reducers';
import {CREATE_COMMENT} from './../../redux-saga/actions';

export const createComment = (payload: any, componentId?: string) => ({
  type: CREATE_COMMENT,
  response: {
    success: {
      type: CREATE_COMMENT_SUCCESS,
    },
    failure: {
      type: CREATE_COMMENT_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});
