import {createReducer} from '../../utils/redux';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILED = 'SEARCH_FAILED';
export const SEARCH_CLEAR = 'SEARCH_CLEAR';

export const SearchResult = createReducer(
  SEARCH_SUCCESS,
  SEARCH_FAILED,
  SEARCH_CLEAR,
);
