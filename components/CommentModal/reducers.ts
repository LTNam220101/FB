import {createReducer} from '../../utils/redux';

export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILED = 'CREATE_COMMENT_FAILED';
export const CREATE_COMMENT_CLEAR = 'CREATE_COMMENT_CLEAR';

export const CreateCommentResult = createReducer(
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILED,
  CREATE_COMMENT_CLEAR,
);
