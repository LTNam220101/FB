import {createReducer} from '../../utils/redux';

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED';
export const CREATE_POST_CLEAR = 'CREATE_POST_CLEAR';

export const CreatePostResult = createReducer(
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  CREATE_POST_CLEAR,
);
