import {SEARCH_FAILED, SEARCH_SUCCESS} from './reducers';
import {SEARCH} from './../../redux-saga/actions';

export const search = (payload: any, componentId?: string) => ({
  type: SEARCH,
  response: {
    success: {
      type: SEARCH_SUCCESS,
    },
    failure: {
      type: SEARCH_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});
