import axios from '../BaseApi';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Request} from '../../../interfaces';
import {SEARCH} from '../../actions';

const searchUrl = `/search/search`;

function search(payload) {
  return axios.post(searchUrl, payload);
}

function* doSearch(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(search, request.payload);
    yield put({
      type: request.response?.success?.type,
      payload: {
        request: request.payload,
        componentId: request.componentId,
        response: response.data,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: request.response?.failure?.type,
      loading: false,
      payload: {
        request: request.payload,
        componentId: request.componentId,
        response: error,
      },
    });
  }
}

export default function* watchSearch() {
  yield takeLatest(SEARCH, doSearch);
}
